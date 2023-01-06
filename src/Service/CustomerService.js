import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";
const CUSTOMER_API_BASE_URL2 = "http://localhost:8080/api/v1/customer/login";

class CustomerService {

    getCustomerById(customerId) {
        return axios.get(CUSTOMER_API_BASE_URL + "/" + customerId);
    }
    createCustomer(customer) {
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    updateCustomer(customer, customerId) {
        return axios.put(CUSTOMER_API_BASE_URL + "/" + customerId, customer);
    }
    deleteCustomer(customerId) {
        return axios.delete(CUSTOMER_API_BASE_URL + "/" + customerId);
    }
    getCustomerLogin(customer){
        return axios.post(CUSTOMER_API_BASE_URL2, customer)
    }

}
export default new CustomerService();