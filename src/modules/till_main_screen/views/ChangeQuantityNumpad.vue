<template>
    <!-- number field accross top -->
    <div class="enter-quantity-popup visual-border">
        <!-- x button -->
        <div class="close-btn btn visual-border" @click="closeQuantityNumpad">x</div>

        <!-- input text area -->
        <div class="quantity-field-container">
            <input
                type="number"
                class="quantity-field"
                min="0"
                step="1"
                ref="quantityField"
                v-model="newQuantity"
            />
            <div class="by-one-buttons">
                <div class="increase-by-one-btn btn visual-border" @click="increaseByOne">
                    <font-awesome-icon icon="angle-up" size="xl" />
                </div>
                <div class="decrease-by-one-btn btn visual-border" @click="decreaseByOne">
                    <font-awesome-icon icon="angle-down" size="xl" />
                </div>
            </div>
        </div>

        <!-- 0-9 grid and action buttons -->
        <div class="buttons-container">
            <div v-for="x in 12" class="grid-box visual-border">
                <div v-if="x < 10" class="number-btn btn" @click="numberPressed(x)">
                    {{ x }}
                </div>
                <div v-else-if="x === 10" class="action-btn btn">0</div>
                <!-- backspace button -->
                <div v-else-if="x === 11" class="action-btn btn" @click="onBackspace">&lt=</div>
                <!-- enter button -->
                <div v-else-if="x === 12" class="action-btn btn" @click="finalSetQuantityToValue">
                    ✔️
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["currentlySelectedDetails"],
    data: function () {
        return {
            newQuantity: 0,
            initiallyOpened: true,
        };
    },
    mounted() {
        // set the value to the current value
        this.newQuantity = this.currentlySelectedDetails.currentTab.items.find(
            (x) => x.itemId === this.currentlySelectedDetails.selectedItemId
        ).quantity;

        this.$nextTick(() => {
            // initially focus the field and select everything so its easy to change for the user
            this.focusAndSelect();
        });
    },
    watch: {
        // prevent -ve and +ve signs, e, also convert to number in the end so the value of newQuantity is always a number
        newQuantity() {
            // replace nondigit characters (prevents "+", "-", "." and "e")
            let newVal = String(this.newQuantity).replace(/\D/g, "");
            this.newQuantity = Number(newVal);
        },
    },
    computed: {
        newQuantity2() {
            let regex = /\D/;
            console.log(regex.test(this.newQuantity));
            return;
        },
    },
    methods: {
        focusAndSelect() {
            // Use nextTick to wait for the next DOM update cycle - had to do this as the above was apparently being slow and the code below ran before it was finished initialising the data, which then made the select function not work
            this.$nextTick(() => {
                this.$refs.quantityField.focus();
                this.$refs.quantityField.select();
            });
        },
        numberPressed(number) {
            if (this.initiallyOpened) {
                // update variable that dictates if the number is selected and replaced on first opening of numpad (for convenience)
                this.initiallyOpened = false;
                this.newQuantity = number;
            } else {
                this.newQuantity = this.newQuantity + "" + number; // I could convert to Number() here but the watcher will do this anyway
            }
        },
        onBackspace() {
            // check if there is something to delete
            if (this.newQuantity > 0) {
                // use mathematical operations to remove the last digit
                this.newQuantity = Math.floor(this.newQuantity / 10);
            }
        },
        closeQuantityNumpad() {
            this.$emit("closeQuantityNumpad");
        },
        increaseByOne() {
            this.initiallyOpened = false;
            this.newQuantity++;
            this.$refs.quantityField.focus();
        },
        decreaseByOne() {
            this.initiallyOpened = false;
            if (this.newQuantity >= 1) this.newQuantity--;
            this.$refs.quantityField.focus();
        },

        finalSetQuantityToValue() {
            // short circuit and validate number, if invalid, dont commit, just close popup TODO: would be nice to get a message once i set up popup notifications
            console.log(this.newQuantity);
            if (
                this.newQuantity === null ||
                this.newQuantity === undefined ||
                this.newQuantity < 0 ||
                this.newQuantity === ""
            ) {
                // close popup
                this.closeQuantityNumpad();
            }

            // using the store mutation, change the value
            let payload = {
                tabId: this.currentlySelectedDetails.currentTab.id,
                itemId: this.currentlySelectedDetails.selectedItemId,
                newQuantity: Number(this.newQuantity),
            };
            console.log("payload: ", payload);

            this.$store.commit("changeItemQuantity", payload);

            // close popup
            this.closeQuantityNumpad();
        },
    },
};
</script>

<style scoped>
/* all buttons */
[class*="-btn"] {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;
    background-color: var(--secondary-color-D);
    color: var(--text-color-D);
}
/* x close button */
.close-btn {
    width: 40px;
    height: 40px;
    margin-top: -40px;
    margin-left: -0.5px;
    background-color: brown;
}
/* enter quantity field */
.quantity-field-container {
    display: flex;
}
.quantity-field {
    height: 85px;
    width: 100%;
    text-align: end;
    padding: 10px;
    font-size: 3rem;
    width: 80%;
    user-select: none;
}
.by-one-buttons {
    width: 20%;
}
.increase-by-one-btn,
.decrease-by-one-btn {
    height: 50%;
    padding: 0.5rem;
}

/* Remove up and down buttons on the quant field */
/* For Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}

/* For Chrome, Safari, and Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* numpad and buttons */
.buttons-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
}
.grid-box {
    height: 70px;
}
</style>
