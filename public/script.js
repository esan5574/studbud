import Navigation from './components/navigation';
import './components/tasklist';
import './components/stopwatch';
import './components/pomodoro';
import './components/acronym';
import './components/kanban-column';
import './components/kanban-task';

const links = document.querySelectorAll('nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

nav.links.forEach(function(link){
    link.addEventListener('click', function() {
        let pageId=nav.getHash(link);
        nav.setPage(pageId);
    })
})
