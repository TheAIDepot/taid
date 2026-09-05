/** 

* Main JavaScript for The AI Depot Website
* Created: June 2025
* Updated: September 2026 (Bug Fixes)
*/

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header'); 

// Mobile Navigation Toggle
if (hamburger) {
hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
hamburger.classList.toggle('active');
});
} 

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
if (window.scrollY > 100) {
if (header) header.classList.add('scrolled');
} else {
if (header) header.classList.remove('scrolled');
}
}); 

// Interactive AI Action Plan & Prompt Builder Selection Helper
document.addEventListener('DOMContentLoaded', () => {
let selectedIndustry = '';
let selectedBottleneck = ''; 

// Handle Industry Selection (Assuming they are list items or clickable elements)
const industryItems = document.querySelectorAll('.industry-selection-list li, [data-industry]');
const bottleneckItems = document.querySelectorAll('.bottleneck-selection-list li, [data-bottleneck]');

// Elements to display results
const actionPlanOutput = document.getElementById('action-plan-output');
const masterPromptOutput = document.getElementById('master-prompt-output');

if (industryItems.length > 0) {
industryItems.forEach(item => {
item.addEventListener('click', () => {
// Clear active class from siblings
industryItems.forEach(i => i.classList.remove('selected'));
item.classList.add('selected');
        selectedIndustry = item.innerText || item.getAttribute('data-industry');
        generateTailoredPlan(selectedIndustry, selectedBottleneck);
    });
});

}

if (bottleneckItems.length > 0) {
bottleneckItems.forEach(item => {
item.addEventListener('click', () => {
// Clear active class from siblings
bottleneckItems.forEach(i => i.classList.remove('selected'));
item.classList.add('selected');
        selectedBottleneck = item.innerText || item.getAttribute('data-bottleneck');
        generateTailoredPlan(selectedIndustry, selectedBottleneck);
    });
});

}

function generateTailoredPlan(industry, bottleneck) {
if (!actionPlanOutput || !masterPromptOutput) return;
if (!industry || !bottleneck) {
    actionPlanOutput.innerHTML = '<p>Select your options above to see your plan.
