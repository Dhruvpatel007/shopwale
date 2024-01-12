import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import Jwt  from 'jsonwebtoken';


// @desc    Auth user
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
     
    const user = await User.findOne({email})
    if(user && await user.matchPassword(password)){

        const token=Jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn: '30d'})

        // set JWT as http only
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sametime: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000  //30D
        })
        res.send({
            _id : user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid email & Password')
    }
})

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('Register user')
})

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user')
})

// @desc    get user profile
// @route   GET /api/users/profile
// @access  public
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile')
})

// @desc    Get Users
// @route   GET /api/users
// @access  Private/ admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users')
})

// @desc    Get User by id
// @route   GET /api/users/:id
// @access  Private/ admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id')
})

// @desc    Delete user 
// @route   DELETE /api/users/:id
// @access  Private/admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user ')
})

// @desc    update user 
// @route   PUT /api/users/:id
// @access  Private/admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user ')
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
  };



