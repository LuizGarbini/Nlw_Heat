const LinksSocialMedia = {
  github: "LuizGarbini",
  facebook: "luizgarbinineto.garbini",
  instagram: "luizz3ra",
  twitter: "GarbiniLuiz",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitGubProfileInfos() {
  const url = `https://api.github.com/users/${
    LinksSocialMedia.github ?? "LuizGarbini"
  }`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      UserImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitGubProfileInfos();
