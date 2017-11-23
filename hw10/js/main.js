
const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            console.log(json)

            // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
            json.stations.station.forEach((station) => {
                const option = document.createElement('option')
                option.innerHTML = station.name
                option.value = station.abbr
                document.getElementById('station_list').appendChild(option)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

const getArrivalTimes = () => {
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list and query
    // for the corresponding station
    const bartStationCode = stationList.value
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
                // PART III.B.2: Instead of printing this info to the console,
                // output it to the DOM
            document.getElementById('results').innerHTML = ''

            const header = document.createElement('h2')
            header.innerHTML = json.station[0].name
            document.getElementById('results').appendChild(header)

            json.station[0].etd.forEach((line) => {
                console.log('Line:', line)
                const trainLine = document.createElement('h3')
                trainLine.innerHTML = `${line.destination}: Platform #
                    ${line.estimate[0].platform} (${line.estimate[0].direction})`
                //trainLine.innerHTML = line.destination + ': Platform # ' + line.estimate[0].platform
                document.getElementById('results').appendChild(trainLine)

                const trainColor = document.createElement('span')
                trainColor.style.background = line.estimate[0].hexcolor
                trainColor.classList.add('train-square')
                document.getElementById('results').appendChild(trainColor)

                const departureTimes = []
                line.estimate.forEach((estimate) => {
                    departureTimes.push(estimate.minutes)
                    console.log('Estimate:', estimate)
                })

                const departureTime = document.createElement('span')
                departureTime.innerHTML = departureTimes.join(', ')
                departureTime.innerHTML += ' minutes'
                // if (estimate.delay !== '0') {
                //     departureTime.innerHTML += '***'
                // } http://api.bart.gov/docs/bsa/bsa.aspx
                document.getElementById('results').appendChild(departureTime)

            })
        })
        .catch((err) => {
            console.log(err)
        })
}

makeStationList()
