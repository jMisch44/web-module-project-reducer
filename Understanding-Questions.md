# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.
* The user presses the 1 button.
* The onClick attribute invokes the handleAddOne function
* the handleAddOne then goes to the actions file for the addOne functions return
* The addOne return is passed as an argument into the dispatch
* the dispatch goes to the reducers file and runs through the switch statement
* Get the return from the switch
* TotalDisplay shows the total plus 1.
