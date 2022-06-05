"use strict";
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    ƒ.Project.registerScriptNamespace(Script); // Register the namespace to FUDGE for serialization
    class CustomComponentScript extends ƒ.ComponentScript {
        // Register the script as component for use in the editor via drag&drop
        static iSubclass = ƒ.Component.registerSubclass(CustomComponentScript);
        // Properties may be mutated by users in the editor via the automatically created user interface
        message = "CustomComponentScript added to ";
        constructor() {
            super();
            // Don't start when running in editor
            if (ƒ.Project.mode == ƒ.MODE.EDITOR)
                return;
            // Listen to this component being added to or removed from a node
            this.addEventListener("componentAdd" /* COMPONENT_ADD */, this.hndEvent);
            this.addEventListener("componentRemove" /* COMPONENT_REMOVE */, this.hndEvent);
            this.addEventListener("nodeDeserialized" /* NODE_DESERIALIZED */, this.hndEvent);
        }
        // Activate the functions of this component as response to events
        hndEvent = (_event) => {
            switch (_event.type) {
                case "componentAdd" /* COMPONENT_ADD */:
                    ƒ.Debug.log(this.message, this.node);
                    break;
                case "componentRemove" /* COMPONENT_REMOVE */:
                    this.removeEventListener("componentAdd" /* COMPONENT_ADD */, this.hndEvent);
                    this.removeEventListener("componentRemove" /* COMPONENT_REMOVE */, this.hndEvent);
                    break;
                case "nodeDeserialized" /* NODE_DESERIALIZED */:
                    // if deserialized the node is now fully reconstructed and access to all its components and children is possible
                    break;
            }
        };
    }
    Script.CustomComponentScript = CustomComponentScript;
})(Script || (Script = {}));
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    ƒ.Debug.info("Main Program Template running!");
    let viewport;
    let cmpCamera;
    let playerTransform;
    let player;
    let ball;
    let ballRigi;
    document.addEventListener("interactiveViewportStarted", start);
    function start(_event) {
        viewport = _event.detail;
        //get golf ball
        ball = viewport.getBranch().getChildrenByName("Ball")[0];
        ballRigi = ball.getComponent(ƒ.ComponentRigidbody);
        //setup Camera following ball
        player = viewport.getBranch().getChildrenByName("Player")[0];
        playerTransform = player.getComponent(ƒ.ComponentTransform);
        viewport.camera = cmpCamera = player.getComponent(ƒ.ComponentCamera);
        viewport.camera.mtxPivot.translate(new ƒ.Vector3(0, 15, -5));
        viewport.camera.mtxPivot.rotateX(70);
        //playerTransform.mtxLocal.translate(new ƒ.Vector3(0, 5, -15));
        //fixedPoint = ball.mtxLocal.translation;
        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        ƒ.Loop.start(); // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
    }
    function update(_event) {
        ƒ.Physics.simulate(); // if physics is included and used
        viewport.draw();
        ƒ.AudioManager.default.update();
        followBall();
        controlBall();
    }
    function controlBall() {
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W])) {
            ballRigi.setVelocity(new ƒ.Vector3(0, 0, 10));
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A])) {
            ballRigi.setVelocity(new ƒ.Vector3(10, 0, 0));
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S])) {
            ballRigi.setVelocity(new ƒ.Vector3(0, 0, -10));
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D])) {
            ballRigi.setVelocity(new ƒ.Vector3(-10, 0, 0));
        }
    }
    function followBall() {
        let ballVector = new ƒ.Vector3;
        ballVector = ball.mtxLocal.translation;
        ballVector.y = 15;
        playerTransform.mtxLocal.translation = ballVector;
    }
})(Script || (Script = {}));
//# sourceMappingURL=Script.js.map