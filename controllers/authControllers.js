'use strict'

import bcrypt from 'bcrypt';
import User from '../model/User.js';
import express from 'express';

export const register = async (req, res) => {

    try {
        const { user, pass } = req.body;
        const userExist = await User.findOne({ where: { user } })

        if (userExist) {
            return res.status(409).json({ message: 'O usuario já existe' })
        }
        const salt = await bcrypt.genSalt(12)
        const passHash = await bcrypt.hash(pass, salt)
        await User.create({ user, pass: passHash })

        res.status(200).json({ message: 'Usuario Criado com Sucesso' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "ERRO" })
    }

}
export const login = async (req, res) => {

    try {
        const { user, pass } = req.body;
        const userLog = await User.findOne({ where: { user } })


        if (!userLog) {
            return res.status(409).json({ message: 'O usuario não existe' })
        }
        const checkerPass = await bcrypt.compare(pass, userLog.pass)
        if (!checkerPass) {
            return res.status(409).json({ message: 'Senha incorreta' })
        }


        res.status(200).json({ message: 'Usuario Logado com Sucesso' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "ERRO" })
    }

}
export const changePass = async (req, res) => {

    try {
        const { user, pass } = req.body;
        const userLog = await User.findOne({ where: { user } })

        if (!userLog) {
            return res.status(409).json({ message: 'O usuario não existe' })
        }

        const salt = await bcrypt.genSalt(12)
        const passHash = await bcrypt.hash(pass, salt)
    
        // userlog json, pass(objeto)  
        userLog["pass"] = passHash;
        
        await userLog.save();

        res.status(200).json({ message: 'Senha Alterada Com Sucesso!' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "ERRO" })
    }

}