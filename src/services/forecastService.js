const baseUrl = "http://localhost:8081/weather/";

export const getWeatherForLocation = async (mountain = 'Rila', location = 'Kostenets', days = 5) => {
    let result;
    try {
        result = (await fetch(baseUrl + `${mountain}/${location}/${days}`)).json();
    } catch (error) {
        console.log(error)
    }

    return result;
}