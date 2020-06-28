# password_generator
Random password Generator - choose your length

This is a random password generator that will give you a password within the length of 8 and 128.

When you click the Generate Password button. you will be presented with prompts of password criteria.

You may choose by clicking OK button to select YES and Cancel button to select NO for each criteria.

Then you will be prompted to choose the length of the password between 8 to 128 characters. You can enter the number and select ok.

It will then generate a password of your selection.

I used Javascript to build this generator with confirm function to enable yes and no prompts and prompt function for ability to enter number.

I defined the selection criteria for all possible values before the generate random password function.

Then i concatenated my selection to an empty array. 

Lastly i ran a for loop to take the selected array of all approved characters and present them in a new empty list called passwordString based on the lenghth of the password picked. 
