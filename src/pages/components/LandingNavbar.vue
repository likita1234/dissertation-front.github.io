<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const hover = ref({
    home: false,
    survey: false,
    auth: false,
    contact: false,
})

const authActive = computed(() => {
    return route?.name === 'register' || route?.name === 'login'
})


</script>

<template>
    <div class="flex justify-content-center align-items-end gap-7 mt-5">
        <div class="icon" @mouseover="hover.home = true" @mouseleave="hover.home = false" v-tooltip="'Home'">
            <router-link :to="{ name: 'landing' }" v-slot="{ isExactActive }">
                <font-awesome-icon class="cursor-pointer" :class="{ 'text-white': isExactActive || hover.home }"
                    icon="house" size="3x" :bounce="hover.home" />
            </router-link>
        </div>
        <!-- For Surveys -->
        <div class="icon" @mouseover="hover.survey = true" @mouseleave="hover.survey = false" v-tooltip="'Surveys'">
            <router-link :to="{ name: 'survey' }" v-slot="{ isActive }">
                <font-awesome-icon class="cursor-pointer" :class="{ 'text-white': hover.survey || isActive }"
                    icon="square-poll-vertical" size="3x" :bounce="hover.survey" />
            </router-link>
        </div>
        <div class="icon" @mouseover="hover.auth = true" @mouseleave="hover.auth = false" v-tooltip="'Login'">
            <router-link :to="{ name: 'login' }">
                <font-awesome-icon class="cursor-pointer" :class="{ 'text-white': hover.auth || authActive }"
                    icon="right-to-bracket" size="3x" :bounce="hover.auth" />
            </router-link>
        </div>
        <!-- For Contacts -->
        <div class="icon" @mouseover="hover.contact = true" @mouseleave="hover.contact = false"
            v-tooltip="'Contact Us'">
            <!-- <router-link :to="{ name: 'contact' }" v-slot="{ isActive }" > -->
            <font-awesome-icon class="cursor-pointer" :class="{ 'text-white': hover.contact }" icon="envelope" size="3x"
                :bounce="hover.contact" />
            <!-- </router-link> -->
        </div>
    </div>
</template>