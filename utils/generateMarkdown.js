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

Q: What was your motivation?

    A: ${Motivation}
    
Q: Why did you build this project?

    A: ${Build}

Q: What problem does it solve? 

    A: ${Problem}

Q: What did you learn?

    A: ${Learn}


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

