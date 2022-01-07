export default class apiConfig {
    private URL = "http://localhost:8080/api/";
   //private URL = "http://162.214.103.238:8090/api/"

    setURL(URL: string) {
        this.URL = URL;
    }

    getURL() {
        return this.URL;
    }
}