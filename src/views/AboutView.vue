<template>
  <div class="about-me">
    <header class="header">
      <h1>About Me</h1>
    </header>
    <section class="intro">
      <h2>Hi, I'm [Bernat Font]</h2>
      <p>
        I am a [Web Developer] with a passion for [Full Stack].
        I have experience in [VUE & Laravel projects].
      </p>
    </section>
    <section class="skills">
      <h2>Skills</h2>
      <ul>
        <li v-for="(skill, index) in skills" :key="skill" data-aos="fade-right" :data-aos-delay="index * 200" >{{ skill }}</li>
      </ul>
    </section>
    <section class="projects">
      <h2>Projects</h2>
      <div class="project-gallery">
        <div v-for="project in projects" :key="project.id" class="project">
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  'JavaScript',
  'Vue.js',
  'CSS',
  'HTML',
  'PHP',
  'SQL',
  'MySQL'
]);

const projects = ref([
  {
    id: 1,
    title: 'Project One',
    description: 'Description of project one.',
    image: '/assets/images/p1.jpeg'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of project two.',
    image: '/assets/images/p2.jpg'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of project three.',
    image: '/assets/images/p3.jpg'
  }
]);


</script>

<style scoped>
.about-me {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.intro {
  margin-bottom: 30px;
}

.skills ul {
  list-style-type: none;
  padding: 0;
}

.skills li {
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 5px 0;
  padding: 10px;
}

.projects .project-gallery {
  display: flex;
  flex-wrap: wrap;
}

.project {
  min-width: 300px;
  flex: 1;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
}

.project img {
  width: 100%;
  height: auto;
}

.project h3 {
  margin: 10px 0;
}

.project p {
  padding: 0 10px 10px;
}
</style>
