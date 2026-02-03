// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  link: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface Stat {
  icon: string;
  label: string;
  count: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <!-- Navigation -->
      <nav class="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CHE
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8">
              <button
                *ngFor="let section of sections"
                (click)="scrollToSection(section)"
                [class.text-blue-400]="activeSection === section"
                class="capitalize hover:text-blue-400 transition-colors"
              >
                {{ section }}
              </button>
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden" (click)="toggleMenu()">
              <svg *ngIf="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg *ngIf="isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div *ngIf="isMenuOpen" class="md:hidden bg-gray-800 border-t border-gray-700">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <button
              *ngFor="let section of sections"
              (click)="scrollToSection(section)"
              class="block w-full text-left px-3 py-2 capitalize hover:bg-gray-700 rounded-md"
            >
              {{ section }}
            </button>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="home" class="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1 space-y-6">
              <div class="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
                Senior Software & AI Engineer
              </div>
              <h1 class="text-5xl md:text-7xl font-bold leading-tight">
                Chika Henry
                <br />
                <span class="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Ejiofor
                </span>
              </h1>
              <p class="text-xl text-gray-400 leading-relaxed">
                Innovative Software Engineer with 7+ years of experience building scalable fintech,
                banking, and enterprise applications. Specializing in cloud-native architecture,
                microservices, and AI-powered solutions.
              </p>
              <div class="flex flex-wrap gap-4">
                <button
                  (click)="scrollToSection('projects')"
                  class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  View Projects
                </button>
                <button
                  (click)="scrollToSection('contact')"
                  class="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            <div class="flex-1">
              <div class="relative w-80 h-80 mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div class="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full border-4 border-blue-500/30 overflow-hidden">
                  <div class="w-full h-full flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    <img src="https://i.postimg.cc/2576GHp0/profile-Pic.jpg" alt="Profile Picture" class="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl font-bold mb-12 text-center">
            About <span class="text-blue-400">Me</span>
          </h2>

          <div class="grid md:grid-cols-2 gap-12 mb-16">
            <div class="space-y-6">
              <p class="text-gray-300 leading-relaxed">
                I'm a passionate software engineer with a strong foundation in both backend and frontend
                development. My journey in tech has taken me through various domains including fintech,
                banking, and enterprise software development.
              </p>
              <p class="text-gray-300 leading-relaxed">
                I specialize in architecting and developing scalable, cloud-native applications using
                modern technologies. My expertise spans across .NET, Java, Node.js ecosystems, and I'm
                particularly excited about leveraging AI/ML to solve complex business problems.
              </p>
              <div class="flex flex-wrap gap-4 pt-4">
                <div class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Lagos, Nigeria</span>
                </div>
                <div class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>7+ Years Experience</span>
                </div>
                <div class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span>Microsoft Azure Certified</span>
                </div>
                <div class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span>Solutions Achitect</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div *ngFor="let stat of stats" class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all">
                <svg class="w-8 h-8 text-blue-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path *ngIf="stat.icon === 'code'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  <path *ngIf="stat.icon === 'database'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                  <path *ngIf="stat.icon === 'cloud'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  <path *ngIf="stat.icon === 'award'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <div class="text-3xl font-bold mb-2">{{ stat.count }}</div>
                <div class="text-sm text-gray-400">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="mt-16">
            <h3 class="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div *ngFor="let skillGroup of skills" class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all">
                <h4 class="font-semibold text-blue-400 mb-4">{{ skillGroup.category }}</h4>
                <ul class="space-y-2">
                  <li *ngFor="let skill of skillGroup.items" class="text-sm text-gray-300 flex items-center gap-2">
                    <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    {{ skill }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl font-bold mb-4 text-center">
            Featured <span class="text-blue-400">Projects</span>
          </h2>
          <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Showcasing enterprise-grade solutions across fintech, AI/ML, and cloud-native applications
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let project of projects" class="group bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <div class="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                <img
                  [src]="project.image"
                  [alt]="project.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div class="absolute top-4 right-4 px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                  {{ project.category.split('&')[0].trim() }}
                </div>
              </div>

              <div class="p-6 space-y-4">
                <h3 class="text-xl font-bold group-hover:text-blue-400 transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                  {{ project.description }}
                </p>

                <div class="space-y-2">
                  <div *ngFor="let highlight of project.highlights" class="flex items-start gap-2 text-sm text-gray-300">
                    <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>{{ highlight }}</span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 pt-2">
                  <span *ngFor="let tech of project.technologies.slice(0, 4)" class="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400">
                    {{ tech }}
                  </span>
                  <span *ngIf="project.technologies.length > 4" class="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-400">
                    +{{ project.technologies.length - 4 }} more
                  </span>
                </div>

                <button class="flex items-center gap-2 text-blue-400 hover:gap-3 transition-all text-sm font-semibold">
                  View Details
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold mb-12 text-center">
            Professional <span class="text-blue-400">Experience</span>
          </h2>

          <div class="space-y-8">
            <div *ngFor="let job of experience" class="relative pl-8 pb-8 border-l-2 border-gray-700 last:pb-0">
              <div class="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -translate-x-[9px]"></div>

              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 class="text-xl font-bold text-blue-400">{{ job.title }}</h3>
                    <p class="text-lg text-gray-300">{{ job.company }}</p>
                  </div>
                  <div class="text-sm text-gray-400">
                    <div>{{ job.period }}</div>
                    <div class="flex items-center gap-1 mt-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {{ job.location }}
                    </div>
                  </div>
                </div>

                <ul class="space-y-2">
                  <li *ngFor="let highlight of job.highlights" class="flex items-start gap-2 text-gray-300">
                    <svg class="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Education & Certifications -->
          <div class="mt-16 grid md:grid-cols-2 gap-8">
            <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div class="flex items-center gap-3 mb-4">
                <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
                <h3 class="text-xl font-bold">Education</h3>
              </div>
              <div class="space-y-2">
                <p class="font-semibold text-gray-200">B.Sc. Biochemistry</p>
                <p class="text-gray-400">Federal University of Technology, Owerri</p>
                <p class="text-sm text-gray-500">2012 - 2017 | Second Class Upper (Hons)</p>
              </div>
            </div>

            <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div class="flex items-center gap-3 mb-4">
                <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <h3 class="text-xl font-bold">Certifications</h3>
              </div>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-gray-300">
                  <svg class="w-4 h-4 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Microsoft Azure Developer (AZ-204)</span>
                </li>
                <li class="flex items-start gap-2 text-gray-300">
                  <svg class="w-4 h-4 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>MBA, Artificial Intelligence</span>
                </li>
                <li class="flex items-start gap-2 text-gray-300">
                  <svg class="w-4 h-4 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>System Design & Architecture</span>
                </li>
                <li class="flex items-start gap-2 text-gray-300">
                  <svg class="w-4 h-4 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Web Development - Code 360 </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4">
            Let's <span class="text-blue-400">Connect</span>
          </h2>
          <p class="text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:chikaejiofor95@yahoo.com"
              class="flex items-center justify-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 hover:bg-gray-800 transition-all group"
            >
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <div class="text-left">
                <div class="text-sm text-gray-400">Email</div>
                <div class="font-semibold group-hover:text-blue-400 transition-colors">chikaejiofor95@yahoo.com</div>
              </div>
            </a>

            <a
              href="tel:+2348109658805"
              class="flex items-center justify-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 hover:bg-gray-800 transition-all group"
            >
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <div class="text-left">
                <div class="text-sm text-gray-400">Phone</div>
                <div class="font-semibold group-hover:text-blue-400 transition-colors">+234 810 965 8805</div>
              </div>
            </a>
          </div>

          <div class="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/chika-henry-ejiofor/"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group"
            >
              <svg class="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/chika-ejiofor"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group"
            >
              <svg class="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8 px-4 border-t border-gray-800 text-center text-gray-400">
        <p>© 2026 Chika Henry Ejiofor. Built with Angular & Tailwind CSS.</p>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  isMenuOpen = false;
  activeSection = 'home';
  sections = ['home', 'about', 'projects', 'experience', 'contact'];

  stats: Stat[] = [
    { icon: 'code', label: 'Full-Stack Development', count: '40+' },
    { icon: 'database', label: 'Database Solutions', count: '20+' },
    { icon: 'cloud', label: 'Cloud Deployments', count: '30+' },
    { icon: 'award', label: 'Projects Delivered', count: '50+' }
  ];

  skills: SkillGroup[] = [
    { category: 'Backend', items: ['C#/.NET Core', 'Java/Spring Boot', 'Node.js', 'RESTful APIs', 'RabbitMQ', 'GraphQL', 'Microservices'] },
    { category: 'Frontend', items: ['Next.js', 'React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Redux/NgRx'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'] },
    { category: 'Databases', items: ['PostgreSQL', 'MSSQL', 'MySQL', 'MongoDB', 'Redis', 'CosmosDB'] },
    { category: 'AI/ML', items: ['TensorFlow', 'OpenAI API', 'Azure ML', 'Python', 'Data Analytics'] }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Financial Fraud Detection System',
      category: 'AI/ML & Fintech',
      description: 'Enterprise-grade machine learning system that analyzes transaction patterns in real-time to detect fraudulent activities. Implemented using TensorFlow, Python microservices, and .NET Core APIs.',
      technologies: ['Python', 'TensorFlow', 'C#', '.NET Core', 'Azure ML', 'PostgreSQL', 'Redis'],
      highlights: [
        'Reduced fraud detection time by 75%',
        'Processes 10M+ transactions daily',
        '99.2% accuracy rate with minimal false positives'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'Intelligent Customer Service Chatbot',
      category: 'AI/ML & Banking',
      description: 'NLP-powered chatbot for banking customer service using OpenAI GPT-4 API, built with Next.js frontend and Java Spring Boot backend. Handles complex banking queries and automates routine transactions.',
      technologies: ['Next.js', 'Java', 'Spring Boot', 'OpenAI API', 'MongoDB', 'Docker', 'Kubernetes'],
      highlights: [
        'Handles 50K+ conversations monthly',
        '85% query resolution without human intervention',
        'Reduced customer service costs by 40%'
      ],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'Multi-Tenant E-commerce Platform',
      category: 'E-commerce & Microservices',
      description: 'Scalable multi-tenant e-commerce platform supporting 100+ merchants. Built with microservices architecture using .NET Core, Angular, and AWS cloud services.',
      technologies: ['Angular', 'C#', '.NET Core', 'AWS ECS', 'DynamoDB', 'RabbitMQ', 'Redis'],
      highlights: [
        'Supports 100+ active merchants',
        'Handles 5M+ monthly transactions',
        '99.99% uptime with auto-scaling'
      ],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      link: '#'
    },
    {
      id: 4,
      title: 'Real-Time Payment Gateway Integration',
      category: 'Fintech & Enterprise',
      description: 'Comprehensive payment gateway integration system supporting multiple providers (Paystack, Flutterwave, Stripe). Built with Node.js microservices and React dashboard.',
      technologies: ['C#', '.Net', 'React', 'TypeScript', 'Azure Functions', 'MSSQL', 'Docker'],
      highlights: [
        'Processes $50M+ monthly transactions',
        'Sub-second response times',
        'Integrates 4+ payment providers'
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      link: '#'
    },
    {
      id: 5,
      title: 'Enterprise Resource Planning System',
      category: 'Enterprise Application',
      description: 'Full-scale ERP system for government agencies with modules for HR, Finance, Procurement, and Asset Management. Built with Java Spring Boot backend and Angular frontend.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Keycloak', 'Jenkins'],
      highlights: [
        'Used by 5 government agencies',
        'Manages 10,000+ employees',
        'Reduced operational costs by 35%'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      link: '#'
    },
    {
      id: 6,
      title: 'Cloud-Native Banking Core System',
      category: 'Banking & Cloud',
      description: 'Modern cloud-native core banking system with microservices architecture. Handles account management, transactions, loans, and reporting with high availability.',
      technologies: ['C#', '.NET 6', 'Azure Kubernetes', 'PostgreSQL', 'Azure Functions', 'Service bus'],
      highlights: [
        'Migrated from monolith to microservices',
        'Improved system reliability to 99.9%',
        'Reduced infrastructure costs by 50%'
      ],
      image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&h=500&fit=crop',
      link: '#'
    }
  ];

  experience: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Rand Merchant Bank',
      period: 'March 2024 - Present',
      location: 'Lagos, Nigeria',
      highlights: [
        'Developed enterprise applications using TypeScript (Angular), C# (.NET Core), and Java (Spring Boot)',
        'Reduced page load times by 30% through performance optimization',
        'Mentored junior developers and fostered collaborative environment'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'IZIFIN Technologies',
      period: 'September 2022 - May 2024',
      location: 'Lagos, Nigeria',
      highlights: [
        'Architected scalable API services using C#, ASP.NET Core, and .NET 5+',
        'Implemented CI/CD pipelines using GitHub Actions for AWS deployments',
        'Collaborated with globally distributed teams on international projects'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Access Bank',
      period: 'October 2021 - September 2022',
      location: 'Lagos, Nigeria',
      highlights: [
        'Led development of core banking services using .NET 6',
        'Reduced bug occurrence by 40% through comprehensive testing',
        'Orchestrated Azure deployments ensuring high availability'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'NowNow Digital Services',
      period: 'September 2020 - September 2021',
      location: 'Lagos, Nigeria',
      highlights: [
        'Developed Revenue generation system for Nasarawa state using .NET 5',
        'Built a Covid-19 tracking dashboard with Angular and Php',
        'Manage Edo State Internal Revenue Service platform using .NET Core'
      ]
    }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    this.activeSection = sectionId;
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
