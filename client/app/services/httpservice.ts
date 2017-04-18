import {Promise} from "es6-promise";
export class HttpService {
    public static get(url: string, parameters?: {}) {
        return this.request("GET", url, parameters);
    }

    public static post(url: string, parameters: {}) {
        return this.request("POST", url, parameters);
    }

    public static put(url: string, parameters: {}) {
        return this.request("PUT", url, parameters);
    }

    public static delete(url: string, parameters: {}) {
        return this.request("DELETE", url, parameters);
    }

    private static request(httpRequestType: string, url: string, parameters: {}) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            let data: {} = null;
            
            if (httpRequestType === "GET" || httpRequestType === "DELETE") {
                url = "/api/" + url + this.buildQueryString(parameters);
            } else {
                url = "/api/" + url;
                data = JSON.stringify(parameters);
            }

            request.open(httpRequestType, url, true);
            request.setRequestHeader("Content-type", "application/json; charset=utf-8");

            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(JSON.parse(request.responseText || "null"));
                } else {
                    if (request.status === 500) {
                        const errorData = JSON.parse(request.responseText || "null");

                        let message = "An error occured";

                        if (errorData) {
                            message = message + ": " + errorData;
                        }

                        console.log(message);
                    }

                    reject(request.statusText);
                }
            };

            request.onerror = () => {
                const additionalText = `Ready state: ${request.readyState}`;
                console.log("Connection to server failed. " + additionalText);
                reject(request.status);
            };

            request.send(data);
        });
    }

    private static buildQueryString(parameters: {}) {
        const queryStringParameters: string[] = [];
        for (let parameter in parameters) {
            if (parameters.hasOwnProperty(parameter)) {
                let value = parameters[parameter];
                if (value == null) {
                    value = "";
                }
                queryStringParameters.push(encodeURIComponent(parameter) + "=" + encodeURIComponent(value));
            }
        }
        let queryString = queryStringParameters.join("&");

        if (queryString.length > 0) {
            queryString = `?${queryString}`;
        }
        return queryString;
    }
}