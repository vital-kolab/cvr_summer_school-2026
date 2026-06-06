(function(){
  function inferRepo(){
    var host=window.location.hostname;
    var path=window.location.pathname.split('/').filter(Boolean);
    if(host.endsWith('github.io') && path.length){
      var owner=host.replace('.github.io','');
      var repo=path[0];
      return owner+'/'+repo;
    }
    return localStorage.getItem('cvrRepo') || 'YOUR-GITHUB-USERNAME/cvr-summer-school-2026';
  }
  function currentBranch(){return localStorage.getItem('cvrBranch') || 'main';}
  function colabURL(path){return 'https://colab.research.google.com/github/'+inferRepo()+'/blob/'+currentBranch()+'/'+path.replace(/^\.\//,'');}
  function githubURL(path){return 'https://github.com/'+inferRepo()+'/blob/'+currentBranch()+'/'+path.replace(/^\.\//,'');}
  function rawURL(path){return 'https://raw.githubusercontent.com/'+inferRepo()+'/'+currentBranch()+'/'+path.replace(/^\.\//,'');}
  window.CVRPages={inferRepo:inferRepo,colabURL:colabURL,githubURL:githubURL,rawURL:rawURL};
  function applyLinks(){
    document.querySelectorAll('[data-colab-path]').forEach(function(a){a.href=colabURL(a.getAttribute('data-colab-path'));a.target='_blank';a.rel='noopener';});
    document.querySelectorAll('[data-github-path]').forEach(function(a){a.href=githubURL(a.getAttribute('data-github-path'));a.target='_blank';a.rel='noopener';});
    document.querySelectorAll('[data-raw-path]').forEach(function(a){a.href=rawURL(a.getAttribute('data-raw-path'));a.target='_blank';a.rel='noopener';});
    var repoText=document.querySelectorAll('[data-repo-name]');repoText.forEach(function(el){el.textContent=inferRepo();});
  }
  document.addEventListener('DOMContentLoaded',function(){
    applyLinks();
    var form=document.querySelector('[data-repo-form]');
    if(form){
      var repo=form.querySelector('[name=repo]');var branch=form.querySelector('[name=branch]');
      repo.value=inferRepo();branch.value=currentBranch();
      form.addEventListener('submit',function(e){e.preventDefault();localStorage.setItem('cvrRepo',repo.value.trim());localStorage.setItem('cvrBranch',branch.value.trim()||'main');applyLinks();});
    }
  });
})();
