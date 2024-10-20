const dialogues = [
    "Halloween comes from the Celtic festival Samhain, when people believed spirits could walk among the living",
    "People wore masks during Samhain to hide from ghosts",
    "In medieval times, poor people begged for food in exchange for prayers for the dead",
    "The first Jack-o'-Lanterns were carved from turnips, not pumpkins",
    "Seeing a spider on Halloween means a loved one's spirit is nearby",
    "Some people fear poisoned Halloween candy, though real cases are rare",
    "Samhainophobia is the fear of Halloween",
    "Bats are linked to Halloween because they were often seen near Samhain bonfires",
    "Black cats are seen as bad luck, especially on Halloween",
    "Celts left food outside to keep spirits happy",
    "There's a rare condition where people believe they're dead, called 'Walking Corpse Syndrome",
    "Candy apples became less popular after rumors of hidden razor blades",
    "Witches were thought to have animals, like black cats, to assist with magic",
    "Some cultures believe the dead return to visit the living on Halloween night",
    "Halloween is when real-life haunted houses often open for scares",
    "Protect: Carving pumpkins was meant to scare off evil spirits",
    "Ancient people lit big fires on Halloween to keep ghosts away",
    "Some bats drink blood, fueling vampire legends",
    "Fog on Halloween night is thought to be a sign that spirits are near",
    "In the 1600s, people thought witches could cast spells just by speaking"
];

const textDisplay = document.getElementById('text-display');
const dialogueContainer = document.getElementById('witch-dialogue');

let index = 0; // Initialize index to track dialogue

function displayDialogue() {
    dialogueContainer.innerText = dialogues[index]; // Display the current dialogue
    textDisplay.style.display = 'block'; // Show the text display
    textDisplay.style.opacity = 1; // Make it fully visible

    // Fade out after 5 seconds
    setTimeout(() => {
        textDisplay.style.opacity = 0; // Start fading out
    }, 5000); // 5000 milliseconds = 5 seconds

    // Move to the next dialogue after 6 seconds (5 seconds display + 1 second fade)
    setTimeout(() => {
        index++; // Increment the index
        if (index >= dialogues.length) {
            index = 0; // Reset index to 0 if it exceeds the length
        }
        displayDialogue(); // Call the function again for the next dialogue
    }, 6000); // 6000 milliseconds = 6 seconds
}

// Start displaying dialogues
displayDialogue();

