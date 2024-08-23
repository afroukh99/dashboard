import { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { ColorContext } from './ColorContext/darkContext';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import AddNew from './Pages/AddNew/AddNew';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import Blogs from './Pages/Blogs/Blogs';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import Lists from './Pages/UserLists/UserLists';
import './app.scss';

// Dynamically change the data for different pages (replaceable)
const userInpDetails = [
    {
        id: 2,
        name: 'username',
        label: 'Username',
        type: 'text',
        placeholder: 'John23',
        required: true,
        pattern: '^[A-Za-z0-9]{3,12}$',
        errorMsg: 'Username should be 3-12 characters & should not include any special character!',
    },
    {
        id: 3,
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'John Smith',
        required: true,
        pattern: '^[A-Za-z]{1,20}$',
        errorMsg: 'Name is required!',
    },
    {
        id: 4,
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'example@email.com',
        required: true,
        errorMsg: 'Enter a valid email!',
    },
    {
        id: 5,
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
        required: true,
        pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,20}$',
        errorMsg:
            'Password should be 6-20 characters and include at least 1 num, 1 letter, 1 special character!',
    },
    {
        id: 6,
        name: 'address',
        label: 'Address',
        type: 'text',
        placeholder: 'Address',
        required: true,
        errorMsg: 'Address is required!',
    },
];
const productInpDetails = [
    {
        id: 2,
        name: 'title',
        label: 'Title',
        type: 'text',
        placeholder: 'Product title',
        required: true,
        errorMsg: 'Title is required!',
    },
    {
        id: 3,
        name: 'description',
        label: 'Description',
        type: 'text',
        placeholder: 'Product description',
        required: true,
        errorMsg: 'Description is required!',
    },
    {
        id: 4,
        name: 'category',
        label: 'Category',
        type: 'text',
        placeholder: 'Product category',
        required: true,
        errorMsg: 'Category is required!',
    },
    {
        id: 5,
        name: 'price',
        label: 'Price',
        type: 'number',
        placeholder: 'Product price',
        required: true,
        errorMsg: 'Price is required!',
    },
    {
        id: 6,
        name: 'stock',
        label: 'In Stock',
        type: 'text',
        placeholder: 'In Stock',
        required: true,
        errorMsg: 'This field is required!',
    },
];
const blogInputs = [
    {
        id: 1,
        name: 'title',
        label: 'Title',
        type: 'text',
        placeholder: 'Blog title',
        required: true,
        errorMsg: 'Title is required!',
    },
    {
        id: 2,
        name: 'description',
        label: 'Description',
        type: 'text',
        placeholder: 'Blog description',
        required: true,
        errorMsg: 'Description is required!',
    },
    {
        id: 3,
        name: 'tags',
        label: 'Tags',
        type: 'text',
        placeholder: 'Travel, Communication',
        required: true,
        errorMsg: 'Tag is required!',
    },
];


function App() {
    // color state management using react context
    const { darkMode } = useContext(ColorContext);
    const [currentUser , setCurrentUser] = useState(null || JSON.parse(localStorage.getItem('currentUser')))

    const ProtectedRoute = () => {
        if (!currentUser) {
            return <Navigate to={'/login'} />
        }
        return <Outlet />;
    }


    return (
        <div className={darkMode ? 'App dark' : 'App'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login setCurrentUser = {setCurrentUser} currentUser= {currentUser} />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/" element={<Home setCurrentUser = {setCurrentUser}/>} />
                        <Route path="/users" element={<Lists type="user" />} />
                        <Route path="/users/:userId" element={<Detail />} />
                        <Route
                            path="/users/addnew"
                            element={
                                <AddNew
                                    inputs={userInpDetails}
                                    title="Add New User"
                                    type="USER"
                                />
                            }
                        />
                        <Route path="/orders" element={<Orders />} />

                        <Route path="/products" element={<Lists type="product" />} />
                        <Route path="/products/:productId" element={<Detail />} />
                        <Route
                            path="/products/addnew"
                            element={
                                <AddNew
                                    inputs={productInpDetails}
                                    title="Add New Product"
                                    type="PRODUCT"
                                />
                            }
                        />

                        <Route path="/blogs" element={<Blogs type="blog" />} />
                        <Route path="/blogs/:blogId" element={<BlogDetail />} />
                        <Route
                            path="/blogs/addnew"
                            element={
                                <AddNew inputs={blogInputs} title="Add New Blog" type="BLOG" />
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
