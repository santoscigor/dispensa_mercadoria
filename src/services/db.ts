import * as low from "lowdb"
import FileAsync from "lowdb/adapters/FileAsync"
import { Grocery } from "../models/grocery";

const checkDb = async (dbPath: string) => {
    const jsonData = await FileAsync(dbPath);
    const db = low(jsonData);
    try {
        const data = JSON.parse(jsonData.toString());
        if (!Array.isArray(data)) throw new Error("Data is not an array");
    } catch {
        db.defaults(
            { groceries: [], user: {}, count: 0 },
            { recipes: [], user: {}, count: 0 })
        .write()
    }
};

const getGroceriesDb = async () => {
    const groceryData  = await new FileAsync("grocerydb.json");
    const db = low(groceryData);
    
    return db;
}

const getAllGroceries = async () => {
    const db = await getGroceriesDb();
    const groceries = db.get('groceries');

    return groceries;
};

const getAllRecipes = async () => {
    const recipeData  = await FileAsync("recipedb.json");
    const db = low(recipeData);
    const recipes = db.get('recipes');

    return recipes;
}

export const db = {
    checkDb,
    getAllGroceries,
    getAllRecipes
};