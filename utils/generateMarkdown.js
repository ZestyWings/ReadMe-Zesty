const generatorMarkdown = ({ 
    Title, 
    Description, 
    Installation,
    Usage,
    License,
    Contributing,
    Username,
    Email,   
    Motivation,
    Build,
    Problem,
    Learn, 
}) =>

    `# ${Title}

https://github.com/${Username}

## Description

${Description}

- My motivation for this project was ${Motivation}
- I built this project because ${Build}
- What problem does it solve? ${Problem}
- I've learned that ${Learn}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${Installation}

## Usage

${Usage}

## Credits

${Contributing}

## License

${License}

---

## Contact Info

Email: ${Email}
`




module.exports = generatorMarkdown

