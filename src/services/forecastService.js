const baseUrl = "http://localhost:8081/weather/";

export const getWeatherForLocation = async (mountain='Rila', location='Костенец', days=3) => {
    let result;
    if (!!mountain && !!location && !!days) {
        try {
            result =  (await fetch(baseUrl + `${mountain}/${location}/${days}`)).json();
        } catch (error) {
            console.log(error)
        }
    } else {
       result = (await fetch(baseUrl + 'Rila/Костенец/5')).json()
    }
    return result;
}