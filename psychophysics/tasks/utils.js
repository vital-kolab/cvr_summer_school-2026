
// Helper: measure how many screen pixels fit in 1 inch.
function getPPI() {
    var elem = document.createElement('div');
    elem.style.width = '1in';  // Make a hidden 1-inch box
    document.body.appendChild(elem);  // Add the box to the page for a moment
    var ppi = elem.offsetWidth;  // Measure the box width in pixels
    document.body.removeChild(elem);  // Remove the box
    return ppi;
}

// Helper: turn a desired visual angle into an image size in pixels.
function calculateStimulusSize(visualAngle, viewingDistance) {
    const ppi = getPPI();
    const angle_rad = (visualAngle / 2) * (Math.PI / 180);
    const stimulus_size_in_inches = 2 * viewingDistance * Math.tan(angle_rad);
    const stimulus_size_in_pixels = stimulus_size_in_inches * ppi;
    return stimulus_size_in_pixels;
}

function downloadCSV(csv, filename) {
        var csvFile;
        var downloadLink;
        // CSV file
        csvFile = new Blob([csv], {type: "text/csv"});
        // Download link
        downloadLink = document.createElement("a");
        // File name
        downloadLink.download = filename;
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
        // Hide download link
        downloadLink.style.display = "none";
        // Add the link to DOM
        document.body.appendChild(downloadLink);
        // Click download link
        downloadLink.click();
}

// Helper: pick a random number between min and max. Used to start the slider at a random place.
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min; // Function that returns a random number between min and max
}

// Consent Form
var consent_form = {
    type: 'html-button-response',
    stimulus: ` <p>This task is part of a York University research project. Taking part is your choice.</p> 
                <p>We do not collect your name. We save your responses and the time when you completed the task.</p>
                <p>The results may be used in talks, papers, or future analyses.</p>
                    <p>By clicking SUBMIT, you confirm that:</p>
                <ul>
                    <li>You are between 18 to 45 years of age,</li>
                    <li>You do not have uncorrected vision problems,</li>
                    <li>You have never had a seizure,</li>
                    <li>You have never been diagnosed with a neurological disorder,</li>
                    <li>You agree to complete this task voluntarily.</li>
                </ul>`,
    choices: ['SUBMIT'],
    prompt: ""
};

// Fullscreen mode
let fullscreen = {
    type: 'fullscreen',
    fullscreen_mode: true,
    message: '<div style="font-size: 24px; text-align: center;"><strong>The task will switch to fullscreen when you click the button below.</strong></div>',
    button_label: 'Continue'
};

var intro_info = {
    type: 'html-button-response',
    stimulus: ` <p>Please close other tabs or programs while running this task. This helps the task run smoothly.</p> 
                <p>Please read the instructions carefully.</p>
                <p>You will look at images and click responses. The task usually takes 5 to 10 minutes.</p>
                <p>If this task could make you uncomfortable, please do not continue.</p>
                </ul>`,
    choices: ['CONTINUE'],
    prompt: ""
};

var survey = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "What is your age?", 
        name: 'Age', 
        options: ['18-25', '26-30', '31-40', '41-50', '50 and above'], 
        required: true,
        horizontal: true
        }, 
        {
        prompt: "What is your biological sex?", 
        name: 'Gender', 
        options: ['Female', 'Male', 'X'], 
        required: true,
        horizontal: true
        }
    ],
};

// Define turkInfo
var turkInfo = jsPsych.turk.turkInfo();