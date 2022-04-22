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

- What was your motivation?
    ${Motivation}
- Why did you build this project?
    ${Build}
- What problem does it solve? 
    ${Problem}
- What did you learn?
    ${Learn}

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

