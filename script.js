const gods = [
    {
        name: "zeus",
        img: "img/zeus.png",
        desc: "King of the Gods and master of the skies. Represents supreme power, absolute justice, and unyielding leadership.",
        responses: {
            Work: "Rule your professional environment with authority and clarity. Take the lead on your projects and execute your tasks with precision.",
            Studies: "Knowledge is the thunderbolt of the intellect. Master the core concepts of your studies with strict discipline to reach the top.",
            Relationship: "Leadership requires emotional balance. Listen to your partner with justice and preserve mutual respect at the foundation of the relationship.",
            Health: "Command your body to rest when needed. Physical discipline brings back complete vitality.",
            Family: "As a pillar of the family, establish fair boundaries and protect your loved ones from chaotic influences.",
            Decision: "Choose the path of ambition and courage. Do not shrink back from risks; take the definitive step."
        }
    },
    {
        name: "hera",
        img: "img/hera.png",
        desc: "Queen of Olympus and guardian of sacred bonds. Represents loyalty, stability, and long-term commitment.",
        responses: {
            Work: "Build professional partnerships based on loyalty and enduring vision. Avoid shortcuts that compromise your reputation.",
            Studies: "Patience and commitment generate true mastery. Stay firm on your academic plan without distractions.",
            Relationship: "True love demands firm vows and reciprocal loyalty. Resolve disagreements with dignity.",
            Health: "Treat your body as a sacred temple. Consistency in rest will preserve your physical vigor.",
            Family: "Gather your family under home harmony. Preserve traditions and resolve domestic disagreements.",
            Decision: "Prefer stability and security over impulsive, risky changes."
        }
    },
    {
        name: "athena",
        img: "img/athenas.png",
        desc: "Goddess of strategic wisdom, tactical intellect, and logical reasoning.",
        responses: {
            Work: "Strategy outperforms brute force. Plan your professional steps with cold logic and calculate every move.",
            Studies: "Deconstruct complex subjects into logical topics. Your intelligence will solve any quiz or test.",
            Relationship: "Approach emotional matters with emotional intelligence. Rational dialogue will clear up any misunderstanding.",
            Health: "Follow scientific and balanced self-care routines. Mental clarity is born from a sound bodily plan.",
            Family: "Act as the voice of reason in family conflicts, bringing smart and balanced solutions.",
            Decision: "Weigh pros and cons through strict strategic calculation before giving your verdict."
        }
    },
    {
        name: "poseidon",
        img: "img/poseidon.jpg",
        desc: "Lord of the deep seas. Represents intense emotions, intuition, and impetuous shifts.",
        responses: {
            Work: "Your career is passing through rough tides. Adapt your sails to market shifts without fearing the waves.",
            Studies: "Dive deep into the mysteries of research. Trust your academic intuition to find answers.",
            Relationship: "Emotions run deep. Express what you feel sincerely to avoid hidden storms.",
            Health: "Hydrate and seek environments close to nature or waters to purify mental exhaustion.",
            Family: "Be the safe harbor for your family when opinions diverge in heated ways.",
            Decision: "Listen to your deepest gut instinct before navigating toward a new choice."
        }
    },
    {
        name: "aphrodite",
        img: "img/afrodite.png",
        desc: "Goddess of beauty, passionate desire, and aesthetic harmony.",
        responses: {
            Work: "Add charisma and harmony to your projects. Elegant presentation will open professional doors.",
            Studies: "Fall in love with the subject you study. The enchantment of learning will turn effort into pleasure.",
            Relationship: "Romance flourishes with attention, affection, and dedication. Renew the affective spark lightly.",
            Health: "Practice pleasurable activities and body movement. Joy directly raises your immunity.",
            Family: "Spread affection and reconciliation among distant relatives, turning home into a sanctuary.",
            Decision: "Choose the path that resonates with passion, but maintain harmony around you."
        }
    },
    {
        name: "hades",
        img: "img/ades.png",
        desc: "Lord of the Underworld and keeper of hidden wealth. Represents transformation and rebirth.",
        responses: {
            Work: "A professional cycle must end so a richer one can emerge. Discard useless tasks.",
            Studies: "Go straight to the root of theoretical foundations. Deep effort will yield valuable rewards.",
            Relationship: "Leave old grudges behind. True intimacy requires dropping masks.",
            Health: "Withdraw in silence and rest deeply to regenerate your hidden energies.",
            Family: "Resolve old family secrets or pending issues from the past to bring definitive peace.",
            Decision: "Accept the end of old habits; true choice wealth lies right after the transition."
        }
    },
    {
        name: "hermes",
        img: "img/hermes.png",
        desc: "Messenger of the gods, patron of speed, commerce, and agile reasoning.",
        responses: {
            Work: "Speed and smart networking are your weapons. Close pending deals with agility.",
            Studies: "Absorb content dynamically. Rapid study groups will bring excellent results.",
            Relationship: "Keep communication flowing. Cheerful, sincere messages prevent routine in love.",
            Health: "Keep your body moving with fast walks and exercise to boost energy.",
            Family: "Be the communication bridge and bring joyful news among distant relatives.",
            Decision: "Do not hesitate too much. Make an agile choice and adjust course as the wind blows."
        }
    },
    {
        name: "dionysus",
        img: "img/dionisio.png",
        desc: "God of creative inspiration, celebration, and liberation from rigid structures.",
        responses: {
            Work: "Free yourself from excessive corporate bureaucracy. Innovate with artistic creativity and originality.",
            Studies: "Escape mechanical rote memorization. Discover fun, artistic ways of grasping the material.",
            Relationship: "Break routine with a cheerful surprise or spontaneous adventure together.",
            Health: "Relax through art, music, and healthy celebration. Good humor invigorates the spirit.",
            Family: "Promote a cozy, festive gathering to unite the family around a good table.",
            Decision: "Follow the option that sparks your inner creativity and brings immediate enthusiasm."
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); 
            navMenu.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    const container = document.getElementById('gods-circle');
    if (container) {
        const radius = 180; 
        const total = gods.length;

        gods.forEach((god, index) => {
            const node = document.createElement('div');
            node.className = 'god-node';
            node.id = `god-${index}`;
            
            const angle = (index / total) * 2 * Math.PI - (Math.PI / 2);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            node.style.left = `calc(35% + ${x}px)`;
            node.style.top = `calc(70% + ${y}px)`;
            
            node.innerHTML = `
                <img src="${god.img}" alt="${god.name}">
                <span>${god.name}</span>
            `;
            container.appendChild(node);
        });
    }
});

function triggerLightning() {
    const overlay = document.getElementById('lightning-overlay');
    if (overlay) {
        overlay.classList.remove('flash-active');
        void overlay.offsetWidth; 
        overlay.classList.add('flash-active');
    }
}

let isSpinning = false;

function invokeOracle() {
    const nameInput = document.getElementById('seeker-name');
    const aspectInput = document.getElementById('seeker-aspect');
    const queryInput = document.getElementById('seeker-query');

    if (!nameInput || !queryInput) return;

    const name = nameInput.value.trim();
    const aspect = aspectInput.value;
    const query = queryInput.value.trim();

    if (!name || !query) {
        alert("The gods demand a Name and an Inquiry before the ritual begins!");
        return;
    }

    if (isSpinning) return;
    isSpinning = true;

    triggerLightning();

    let counter = 0;
    let totalLoops = 30 + Math.floor(Math.random() * 10);
    const total = gods.length;

    function runSpinStep() {
        document.querySelectorAll('.god-node').forEach(n => n.classList.remove('node-active'));
        const activeNode = document.getElementById(`god-${counter % total}`);
        if (activeNode) activeNode.classList.add('node-active');
        
        counter++;
        if (counter <= totalLoops) {
            let speed = 90 + (counter * 12);
            if (counter > totalLoops - 4) speed = 250;
            setTimeout(runSpinStep, speed);
        } else {
            triggerLightning();
            setTimeout(() => {
                finalizeOracle((counter - 1) % total, name, aspect, query);
            }, 300);
        }
    }

    setTimeout(runSpinStep, 150);
}

function finalizeOracle(selectedIndex, name, aspect, query) {
    isSpinning = false;
    const god = gods[selectedIndex];
    
    const nameEl = document.getElementById('result-god-name');
    const descEl = document.getElementById('result-god-desc');
    const imgEl = document.getElementById('result-img');
    const aspectEl = document.getElementById('result-aspect');
    const resNameEl = document.getElementById('res-name');
    const domainTagEl = document.getElementById('res-domain-tag');
    const queryEl = document.getElementById('res-query');
    const responseEl = document.getElementById('res-response');

    if (nameEl) nameEl.innerText = god.name;
    if (descEl) descEl.innerText = god.desc;
    if (imgEl) imgEl.src = god.img;
    if (aspectEl) aspectEl.innerText = `Divine Verdict: ${aspect} Domain`;
    if (resNameEl) resNameEl.innerText = name;
    if (domainTagEl) domainTagEl.innerText = aspect.toLowerCase();
    if (queryEl) queryEl.innerText = query;
    if (responseEl) responseEl.innerText = god.responses[aspect];

    const mainView = document.getElementById('oracle-main-view');
    const resultView = document.getElementById('result-view');
    if (mainView) mainView.style.display = 'none';
    if (resultView) resultView.style.display = 'grid';
}

function resetOracle() {
    const mainView = document.getElementById('oracle-main-view');
    const resultView = document.getElementById('result-view');
    if (mainView) mainView.style.display = 'grid';
    if (resultView) resultView.style.display = 'none';
    
    document.querySelectorAll('.god-node').forEach(n => n.classList.remove('node-active'));
    const queryInput = document.getElementById('seeker-query');
    if (queryInput) queryInput.value = '';
}