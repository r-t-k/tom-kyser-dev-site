function insertText(target, content, html=false) {
	target.textContent = content;
	if(html){
		target.innerHTML = content;
	}
}

let desc = document.getElementById('desc-text');

let linkSvg = `
	<span class="svg-click">
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 12 12" aria-hidden="true" class="flex-none stroke-current">
	<title>External link icon</title>
	<path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
	<path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
	</svg>
`;

fetch('data/data.json')
	.then(response => response.json())
	.then(data => {
		console.log(data);
		insertText(desc, data.desc);
		//projects
		// foreach .project > .project-box > .project-flex > |.project-tech OR .project-title OR .project-desc OR project-link| <-- spans
		let projCount = data.projects.length;
		for (var i = 0; i < projCount; i++) {
			let proj = document.createElement('div');
			proj.classList.add('project');
			//
			let projBox = document.createElement('div');
			projBox.classList.add('project-box');
			//
			//
			// .project-flex is the root for the content elements
			let projFlexTech = document.createElement('div');
			projFlexTech.classList.add('project-flex');
			//
			let projFlexTitle = document.createElement('div');
			projFlexTitle.classList.add('project-flex');
			//
			let projFlexDesc = document.createElement('div');
			projFlexDesc.classList.add('project-flex');
			//
			let projFlexLink = document.createElement('div');
			projFlexLink.classList.add('project-flex');
			//
			//
			let projTech = document.createElement('span');
			projTech.classList.add('project-tech');
			//
			let projTitle = document.createElement('span');
			projTitle.classList.add('project-title');
			//
			let projDesc = document.createElement('span');
			projDesc.classList.add('project-desc');
			//
			let projLinkA = document.createElement('a');
			projLinkA.classList.add('project-a');
			projLinkA.setAttribute('href',data.projects[i].link);
			//
			let projLink = document.createElement('span');
			projLink.classList.add('project-link');
			//
			let projLinkText = document.createElement('span');

			/*
			here is the structure:
			.project div
				.project-box div
					.project-flex div
						.project-* content span

			*/
			//projects.appendChild(proj) <-- final logic

			insertText(projTech, data.projects[i].tech);
			insertText(projTitle, data.projects[i].title);
			insertText(projDesc, data.projects[i].desc);
			insertText(projLink, linkSvg, true);
			insertText(projLinkText, data.projects[i].linkText);
			//
			projFlexTech.appendChild(projTech);
			projFlexTitle.appendChild(projTitle);
			projFlexDesc.appendChild(projDesc);
			projLink.appendChild(projLinkText);
			projLinkA.appendChild(projLink);
			projFlexLink.appendChild(projLinkA);
			//
			projBox.appendChild(projFlexTech);
			projBox.appendChild(projFlexTitle);
			projBox.appendChild(projFlexDesc);
			projBox.appendChild(projFlexLink);
			//
			proj.appendChild(projBox);
			//
			let projectsDiv = document.getElementById('projects');
			projectsDiv.appendChild(proj);

		}
	});


