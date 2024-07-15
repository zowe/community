const DAYS_IN_WEEK = 7
const PI_LENGTH_IN_DAYS = 13 * DAYS_IN_WEEK;

const startWith = process.argv[2] || "2025/02/03";
const PIs = process.argv[3] || 7; // 2 years worth of the PI

const previousDate = new Date(startWith)
const date = new Date(startWith)
date.setDate(date.getDate() + PI_LENGTH_IN_DAYS - 1)

const options = { year: 'numeric', month: 'long', day: 'numeric' }

for(let i = 0; i < PIs; i++) {
    console.log(`PI: ${previousDate.toLocaleDateString("en-US", options)} - ${date.toLocaleDateString("en-US", options)}`)
    const releaseGaDate = new Date(date)

    const ga = releaseGaDate.toLocaleDateString("en-US", options) // GA is planned to coincide with the end of PI. PI ends on Monday
    releaseGaDate.setDate(releaseGaDate.getDate() - 1);
    const testingEnd = releaseGaDate.toLocaleDateString("en-US", options) // Ends day before planned GA
    releaseGaDate.setDate(releaseGaDate.getDate() + DAYS_IN_WEEK + 2)
    const systemDemo = releaseGaDate.toLocaleDateString("en-US", options) // Happens on Tuesday week after GA
    releaseGaDate.setDate(releaseGaDate.getDate() - 5 * DAYS_IN_WEEK)
    const rcBuild = releaseGaDate.toLocaleDateString("en-US", options) // Happens on Tuesday 4 weeks before GA
    const testingStart = rcBuild;
    releaseGaDate.setDate(releaseGaDate.getDate() - 1);
    const codeFreeze = releaseGaDate.toLocaleDateString("en-US", options) // Happens  day before RC

    console.log(`- Code Freeze: ${codeFreeze}
- RC Build: ${rcBuild}
- Testing: ${testingStart} - ${testingEnd}
- GA: ${ga}
- System Demo: ${systemDemo} \n`)

    previousDate.setDate(previousDate.getDate() + PI_LENGTH_IN_DAYS)
    date.setDate(date.getDate() + PI_LENGTH_IN_DAYS)
}

