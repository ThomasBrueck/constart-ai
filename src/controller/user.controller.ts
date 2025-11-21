import type { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";
import type { User } from "@prisma/client";

class UserController {
    // implementar getMyBasicInfo, updateMyBasicInfo, changePassword, deleteMyAccount
}

export const userController = new UserController();