import { createStore } from "vuex";

export default createStore({
    state: {
        available_new_sections: [{type:'singleline',title:'Singleline Input Text'}, {type:'multiline',title:'Multiline Input Text'}, {type:'radio',title:'Radio Choices'},],
        forms: [
        { title: "Form 1", id: 1, details: "lorem", formContents: [
            `<div class="form-section">
                <div class="section-element title">Forename:</div>
                <input class="section-element single-line-input"></input>
                <div class="section-element-controls">
                    <button class="button edit-section-button">Edit ⇨</button>
                    <button class="button delete-section-button">❌</button>
                </div>
            </div>`,
            `<div class="form-section">
                <div class="section-element title">Surname:</div>
                <input class="section-element single-line-input"></input>
                <div class="section-element-controls">
                    <button class="button edit-section-button">Edit ⇨</button>
                    <button class="button delete-section-button">❌</button>
                </div>
            </div>`,
        ], },
        { title: "Form 2", id: 2, details: "lorem" },
        { title: "Form 3", id: 3, details: "lorem" },
        ],
    },
    // Define your mutations, actions, getters, etc. here
});