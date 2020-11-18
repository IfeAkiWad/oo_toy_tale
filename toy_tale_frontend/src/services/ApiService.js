class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getAllToys = () => fetch(`${this.baseURL}/toys`).then((res) => res.json());
}
