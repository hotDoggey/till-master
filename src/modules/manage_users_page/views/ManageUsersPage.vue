<template>
    <div class="vt-table hidden">
        <v-table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Forename</th>
                    <th>Surname</th>
                    <th>Role</th>
                    <th>Date Created</th>
                    <th>Open Tabs</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.name">
                    <td>{{ user.userId }}</td>
                    <td>{{ user.forename }}</td>
                    <td>{{ user.surname }}</td>
                    <td>{{ user.role }}</td>
                    <td>{{ user.dateCreated }}</td>
                    <td>{{ user.openTabs }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>

    <div class="table-container">
        <table border="2">
            <tr>
                <th>User ID</th>
                <th>Forename</th>
                <th>Surname</th>
                <th>Role</th>
                <th>Date Created</th>
                <th>Open Tabs</th>
            </tr>
            <tr>
                <td>13684</td>
                <td>David</td>
                <td>Jones</td>
                <td>Admin</td>
                <td>11/10/2023</td>
                <td>0</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    mounted() {},
    components: {},
    data() {
        return {
            users: [
                {
                    userId: "13684",
                    forename: "David",
                    surname: "Jones",
                    role: "Admin",
                    dateCreated: "11/10/2023",
                    openTabs: "0",
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237,
                },
                {
                    name: "Eclair",
                    calories: 262,
                },
            ],
        };
    },
};
</script>

<style>
.vt-table {
    display: flex;
    justify-content: center;
}
.table-container {
    display: flex;
    justify-content: center;
    justify-items: center;
}
th,
td {
    padding: 0.125rem 1.25rem;
}
</style>
