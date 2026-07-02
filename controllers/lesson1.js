const lesson1 = (req, res) => {
    res.send("hello CSE341");
};

const getProfessional = (req, res) => {
    res.json({
        professionalName: "Kevin Mbemba",
        base64Image: "iVBORw0KGgoAAAANSUhEUgAA...", // your Base64 string
        nameLink: {
            firstName: "Kevin",
            url: "https://github.io/kevin-dev578/web-dev-lab/"
        },
        primaryDescription: "Web developer passionate about APIs and backend systems.",
        workDescription1: "Built scalable Node.js services.",
        workDescription2: "Experienced with PostgreSQL and authentication flows.",
        linkTitleText: "Find me online:",
        linkedInLink: {
            text: "LinkedIn Profile",
            link: "https://linkedin.com/in/kevin-mbemba-kiyindou-4a49502b6"
        },
        githubLink: {
            text: "GitHub Repos",
            link: "https://github.com/snipercoder96"
        }
    });
};




module.exports = {
    lesson1, getProfessional
};