
// Wellcome Here you can Configure your Site with Ease 

export let yourServerName = "Retounsko"; // Change this to Your Server name
let yourDiscordLink = "https://discord.gg/NUbF2vbbrG"; // Your Discord Link (Make sure to include https://)
let yourSupportEmail = "support@your-server.com"; // Your Support Email 
export let ServerIP = "mc.retounsko.eu"; // Your Server IP



export const staffData = {
    "Owner": ["MACHETEEN"], // Put your staff members username in respected place
    "Devloper": ["LilReaper6"],    // If you leave a rank empty it won't be displayed
    "Admin": ["Patik666"],
    "JrAdmin": [],
    "SrMod": [],
    "Mod+": [],
    "Mod": [],
    "Helper": ["Tony_Bony"]
};

// Rank colors (modifiable)
export const rankColors = {
    "Owner": "#e74c3c",  // Here you can change the color of the ranks with ease
    "Devloper": "#f39c12",
    "Admin": "#3498db",
    "JrAdmin": "#9b59b6",
    "SrMod": "#1abc9c",
    "Mod+": "#27ae60",
    "Mod": "#2ecc71",
    "Helper": "#95a5a6"
};



// You can add as much rules as you want, but make sure to keep the format the same

export const rules = {
    serverName: "Your Server",
    rulesList: [
        {
            rule: "No cheating or hacking.",
            details: "Using any third-party software to gain an unfair advantage is strictly prohibited.",
            punishment: "Permanent ban."
        },
        {
            rule: "Be respectful to other players.",
            details: "Toxicity, harassment, or bullying will not be tolerated.",
            punishment: "Warning → Mute → Temporary ban."
        },
        {
            rule: "No spamming in chat.",
            details: "Avoid excessive messages, caps, or repeated commands.",
            punishment: "Mute for 30 minutes → Longer mute for repeat offenses."
        },
        {
            rule: "Do not exploit bugs or glitches.",
            details: "If you find a bug, report it instead of abusing it.",
            punishment: "Temporary ban → Permanent ban if repeated."
        },
        {
            rule: "No offensive language or harassment.",
            details: "Hate speech, slurs, or threats will result in punishment.",
            punishment: "Immediate mute → Ban for severe cases."
        },
        {
            rule: "Follow staff instructions at all times.",
            details: "Disrespecting staff may lead to punishments.",
            punishment: "Warning → Kick → Temporary ban."
        },
        {
            rule: "No advertising other servers.",
            details: "Promoting other servers in chat or DMs is not allowed.",
            punishment: "Immediate mute → Ban for repeated offenses."
        },
        {
            rule: "Do not use inappropriate usernames or skins.",
            details: "Names or skins containing offensive content must be changed.",
            punishment: "Kick → Ban if not changed."
        }
    ]
};



export const faq = {
    sectionTitle: "Frequently Asked Questions",
    questionsList: [
	{
            question: "Jak se připojím na server?",
            answer: "Použij naši IP adresu: <code>mc.retounsko.eu</code> ve svém Minecraft klientu."
        },
        {
            question: "Jakou verzi server podporuje?",
            answer: "Podporujeme Minecraft Java Edition od verze 1.20.1 a novější."
        },
        {
            question: "Jak se mohu stát členem A-týmu?",
            answer: "Přihlášku si můžeš podat na našem Discordu, když jsou nábory otevřené. Musíš být aktivním členem alespoň 1 měsíc."
        },
        {
            question: "Jsou zde nějaké zakázané předměty?",
            answer: "Aktuální seznam omezených předmětů najdeš na našem Discordu v kanálu #info-o-serveru."
        },
        {
            question: "Jak mohu nahlásit hráče?",
            answer: "Použij příkaz <code>/report <hráč> <důvod></code> přímo ve hře nebo vytvoř ticket na našem Discordu."
        }
        
    ]
};



// -------------------------------------------------------------------------------------------------------

// Don't change anything Here!

let discordDisplayText = yourDiscordLink.replace(/^https?:\/\//, "");


function updateServerName() {
    document.querySelectorAll(".config-server-name").forEach(el => {
        el.textContent = yourServerName;
    });
}

updateServerName();


function updateDiscordButton() {
    document.querySelectorAll(".config-discord-btn").forEach(el => {
        el.href = yourDiscordLink;
    });
}

updateDiscordButton();

function updateDiscordFooter() {
    document.querySelector(".config-support-email").innerHTML = 
        `<i class="fas fa-envelope"></i> ${yourSupportEmail}`;

    let footerElement = document.querySelector(".config-discord-footer");
    footerElement.innerHTML = `<i class="fab fa-discord"></i> <a href="${yourDiscordLink}" target="_blank">${discordDisplayText}</a>`;
}

updateDiscordFooter();