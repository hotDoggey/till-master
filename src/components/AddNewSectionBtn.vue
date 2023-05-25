<template>
    <div>
        <button ref="addSectionButton" id="add-section-btn" @click="toggleExpansion">
            Add Section
        </button>
        <div ref="newSections">
            <button
                v-for="(section, index) in availableSections"
                :key="index"
                class="animated-div"
                :style="addIncreasingDelay(index)"
            >
                {{ section.title }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            choicesExpanded: false,
            handleCloseOnBackgroundClick: undefined,
        };
    },
    computed: {
        availableSections() {
            return this.$store.state.available_new_sections;
        },
    },
    methods: {
        addIncreasingDelay(index) {
            return { transitionDelay: `${0.1 * index}s` }; // s for seconds
        },
        toggleExColClasses(el) {
            if (this.choicesExpanded) {
                el.classList.add("collapsed");
                el.classList.remove("expanded");
            } else {
                el.classList.add("expanded");
                el.classList.remove("collapsed");
            }
        },
        toggleExpansion() {
            // find els on page
            const new_sections_collection = this.$refs.newSections.children;
            const button = this.$refs.addSectionButton.getBoundingClientRect();

            // if choices not expanded: translate to new place and increase their size.
            if (!this.choicesExpanded) {
                for (var i = 0; i < new_sections_collection.length; i++) {
                    const buttonCenterX = button.left + button.width / 2;
                    const buttonCenterY = button.top + button.height / 2;

                    const newX = button.left - window.innerWidth * 0.2; // (move them all 20% of page width to the left of the button)
                    const newY =
                        button.top + window.innerHeight * 0.1 * i - window.innerHeight * 0.1; // offset to shift them up by 10% of page height

                    new_sections_collection[i].style.left = `${newX}px`;
                    new_sections_collection[i].style.top = `${newY}px`;
                    this.toggleExColClasses(new_sections_collection[i]);
                }
            }

            // if choises already expanded when clicked: translate back to under the Add Section button, and decrease their size, add increasing delay
            if (this.choicesExpanded) {
                for (var i = 0; i < new_sections_collection.length; i++) {
                    new_sections_collection[i].style.left = `${button.left}px`;
                    new_sections_collection[i].style.top = `${button.top}px`;
                    this.toggleExColClasses(new_sections_collection[i]);
                }
            }
            this.choicesExpanded = this.choicesExpanded ? false : true;
        },
    },
    mounted() {
        // start divs in correct position (under Add Section button)
        // find els on page
        const new_sections_collection = this.$refs.newSections.children;
        const button = this.$refs.addSectionButton.getBoundingClientRect();

        for (var i = 0; i < new_sections_collection.length; i++) {
            new_sections_collection[i].style.left = `${button.left}px`;
            new_sections_collection[i].style.top = `${button.top}px`;
            new_sections_collection[i].classList.add("collapsed");
        }

        // Handle clicking outside an option or the button - collapse
        // set the function up in the empty data variable
        this.handleCloseOnBackgroundClick = (e) => {
            // only if already expanded
            if (this.choicesExpanded) {
                // exclude the buttons we dont want
                if (
                    !(
                        e.target.id === "add-section-btn" ||
                        (e.target.classList.contains("animated-div") &&
                            e.target.classList.contains("expanded"))
                    )
                ) {
                    this.toggleExpansion();
                }
            }
        };
        // Add an event listener with the function above
        document.addEventListener("click", this.handleCloseOnBackgroundClick);
    }, // when navigating away from a page we dont want to leave the elistener, so remove it on component unmount
    unmounted() {
        document.removeEventListener("click", this.handleCloseOnBackgroundClick);
    },
};
</script>

<style>
#add-section-btn {
    position: relative;
    z-index: 10;
}
.animated-div {
    width: fit-content;
    height: fit-content;
    position: absolute;
    transition: all 0.3s ease;
    opacity: 0;
    border: 1px solid orange;
    /* border: 1px var(--primary-color) */
    border-radius: 5px;
    display: block;
    padding: 1rem;
}

.expanded {
    opacity: 1;
}

.collapsed {
    transition: all 0.3s ease, font-size 1.5s ease; /* make it look a bit better*/
    opacity: 0;
    font-size: 0px;
    padding: 0px;
    transition-delay: 0s !important; /* so that they retract all at once */
}

/* Adjust translate and scale values for additional sections */
</style>
