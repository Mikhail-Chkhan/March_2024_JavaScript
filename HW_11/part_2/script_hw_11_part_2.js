// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(rez => {
        let recipes = rez
        console.log(rez)
        create_recipe(recipes.recipes)
    });

// let main = document.createElement('main')
// main.id = "main"

let create_recipe = (recipes) => {
    recipes.forEach((recipe) => {
        console.log(recipe)


        let div_card = document.createElement('div')
        let div_name = document.createElement('div')
        let div_rating = document.createElement('div')
        let div_image = document.createElement('div')
        let div_description = document.createElement('div')
        let div_tags = document.createElement('div')
        let div_instructions = document.createElement('div')
        let div_ingredients = document.createElement('div')
        let div_other = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')

        div_card.id = 'card'
        div_name.id = 'name'
        div_rating.id = 'rating'
        div_image.id = 'image'
        div_description.id = 'description'
        div_tags.id = 'tags'
        div_instructions.id = 'instructions'
        div_ingredients.id = 'ingredients'
        div_other.id = 'other'
        img.id = 'img'

        h3.innerText = `${recipe.name}`
        div_name.appendChild(h3)
        div_rating.innerText = `rating: ${recipe.rating}`
        img.src = recipe.image
        div_image.appendChild(img)
        div_description.innerText = `
            difficulty: ${recipe.difficulty}
            cuisine: ${recipe.cuisine}
            meal: ${recipe.mealType}
            calories per serving: ${recipe.caloriesPerServing}
            preparation time minutes: ${recipe.prepTimeMinutes}
            cook time minutes: ${recipe.cookTimeMinutes}
            servings: ${recipe.servings} people  
        `
        div_other.innerText = `review: ${recipe.reviewCount}    author (id): ${recipe.userId}   product id: ${recipe.id}`
        create_tag(recipe.tags, div_tags)
        div_instructions.innerText = 'instructions:\n'
        div_ingredients.innerText = 'ingredients:\n'
        create_list(recipe.instructions, div_instructions)
        create_list(recipe.ingredients, div_ingredients)

        div_card.append(div_name, div_rating, div_image, div_description, div_tags, div_instructions, div_ingredients, div_other)
        document.body.appendChild(div_card)


    })
}

let create_tag = (tags, div_tags) => {
    tags.forEach((tag) => {
        let div = document.createElement('div')
        div.classList.add('tag_box')
        div.innerText = tag
        div_tags.appendChild(div)
    })
}

let create_list = (arr, div_parent) => {
    let ul = document.createElement('ul')
    arr.forEach((iteem) => {
        let li = document.createElement('li')
        li.innerText = iteem
        ul.appendChild(li)
    })
    div_parent.appendChild(ul)
}


