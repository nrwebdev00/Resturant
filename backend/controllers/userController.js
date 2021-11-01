import asyncHandler from 'express-async-handler';

import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';


//@desc Login user Generate Token
//@route POST /api/users/login
//@access PUBLIC
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isStaff: user.isStaff,
            role: user.role,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email of Password')
    }
})

//@desc Register New User
//@route POST /api/users/register
//@access PUBLIC
const register = asyncHandler(async(req,res) =>{
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if(userExists){
        res.status(400)
        throw new Error('User already Exists');
    }

    const user = await User.create({
        name, email, password,
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isStaff: user.isStaff,
            role: user.role,
        })
    }else {
        res.status(400)
        throw new Error('Invalid user Data')
    }
})

//@desc Retrive User Profile Data
//@route GET /api/users/porfile
//@access PRIVATE - LOGIN
const getProfile = asyncHandler(async(req, res) =>{
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isStaff: user.isStaff,
            role: user.role
        })
    }else{
        res.status(404)
        throw new Error('User Not Found')
    }
})

//@desc Update User Porfile
//@route PUT /api/users/profile
//@access PRIVATE - LOGIN
const updateProfile = asyncHandler(async(req, res) =>{
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
        user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        isStaff: updatedUser.isStaff,
        role: updatedUser.role,
        token: generateToken(updatedUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

//@desc Create Staff USER
//@route POST /api/users/staff
//@access PRIVATE - LOGIN - IS_ADMIN=>TRUE
const createStaff = asyncHandler(async(req, res) =>{
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if(userExists){
        res.status(400)
        throw new Error('User already Exists');
    }

    const user = await User.create({
        name, email, password, isStaff: true,
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isStaff: user.isStaff,
            role: user.role,
        })
    }else {
        res.status(400)
        throw new Error('Invalid user Data')
    }
})

//@desc Create Admin USER
//@route POST /api/users/admin
//@access PRIVATE - LOGIN - IS_ADMIN=>TRUE
const createAdmin = asyncHandler(async(req, res) =>{
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if(userExists){
        res.status(400)
        throw new Error('User already Exists');
    }

    const user = await User.create({
        name, email, password, isAdmin: true
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isStaff: user.isStaff,
            role: user.role,
        })
    }else {
        res.status(400)
        throw new Error('Invalid user Data')
    }
})


export { login, register, getProfile, updateProfile, createStaff, createAdmin }