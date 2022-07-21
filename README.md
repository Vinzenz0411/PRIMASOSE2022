# Minigolf
# Vinzenz Liebherr
# Sommersemester 2022
# PRIMA
# Prof. Dipl.-Ing. Jirka R. Dell'Oro-Friedl
# Playable under https://vinzenz0411.github.io/PRIMASOSE2022/Minigolf/index.html
# Source Code: https://github.com/Vinzenz0411/PRIMASOSE2022/tree/main/Minigolf
# !!!!!!!!DEsing Document
# All Controls are found in the Screen showing before the User clicks Start (Found under the github.io Link above). The Game can be played with a Keyboard
# There are no additional services used. After Cloning the Repository the Application can be satrted with opening "index.html" in "VSC Live Server"

# Nr	Criterion	            Explanation
1	    Units and Positions	    The Game is played on the x, z Axis for functioning physics. 0 is in the middle/origin of the coordinate System. 1 is one meter (also for 
                                physics)

2	    Hierarchy	            The Game is set up in one Graph called "Game". (More information in the Design Document)

3	    Editor	                Course creation and World building is done in the Editor. The Golf Ball gets created in the Code to enable Customization

4	    Scriptcomponents	    Script Component is used for the Camera following the Ball. It could also be done without a Script Component however is could be useful for 
                                future functions who also need to follow the Ball 

5	    Extend	                The generated Golf Ball extends f.Node. This helps with creating and adding the Ball to the Graph after reading the custom properties

6	    Sound	                All used sounds are placed in the Sound-Node. No sound comes from a specific direction. There are three sounds 
                                (Background Music, Hit sound, Win sound)

7	    VUI	                    The Interface is used to display general Information about the current game. (Timer, Hits, Max. Hits)

8	    Event-System	        The Event-System is used to detect the Ball coliding with the Finish-Flag and to play a sound after finsihing the Map. This would be difficult 
                                without Events

9	    External Data	        Following Parameter can be changed in the config.json file: MaxHits for finishing the Map, The strength of every hit to the Ball. The Ball 
                                Size and Color. These Parameters can be used to create a different playing experience and could be used to enable user created content

A	    Light	                One Ambient Light Source is used for this Application. The aim is to provide realistic lighting from one Source to simulate Sunlight

B	    Physics	                There are Rigibody Components used with nearly every Mesh to guarantee "Real" Physics and Collisons for example for the Ball colliding with 
                                the Walls. The Ball is played via Forces to simulate the Hit given to the Ball

C	                            Not implemented

D	                            Not implemented

E	    Animation	            The Animation System of Fudge is used to realize moving Obstacles on the Course