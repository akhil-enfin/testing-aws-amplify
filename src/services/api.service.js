import * as moment from 'moment'
const axios = require('axios')
export async function listAppoinments(id) {
    let currentDate=moment( new Date()).format("DD-MM-YYYY");
        let nextDate=moment(currentDate, "DD-MM-YYYY"). add(1, 'days').format("DD-MM-YYYY")
    return await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=${id}&date=${nextDate}`)
}