# back-chamber-repro-astronomy

Need meteor to be installed in your system.
Then run the program

![image](https://user-images.githubusercontent.com/78148802/115378631-f2109100-a1fa-11eb-8040-94a622385697.png)
Basicly, when you click the "Publish Game" button, it will run a method to change isPublished field value. But it check the paramCounters validation fields instead.

Here are the project structure
![image](https://user-images.githubusercontent.com/78148802/115378951-461b7580-a1fb-11eb-9593-e5d8825cd02e.png)
the react code for the page is in ui/pages/GameDB.jsx and ui/pages/GDBComp.jsx for the component code. The method call in GDBComp line 46.
The schema will be in db/game.js in the first class
Method in api/serverMethod.js, I'm only include 2 methods in there.
