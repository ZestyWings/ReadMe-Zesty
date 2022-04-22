const generatorMarkdown = ({ 
    Title, 
    Description, 
    Installation,
    Usage,
    License,
    Contributing,
    Username,
    Email,    
}) =>


    `# ${Title}

https://github.com/${Username}

## Description

${Description}

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

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

