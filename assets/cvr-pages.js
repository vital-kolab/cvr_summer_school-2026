/*
  CVR Summer School notebook link configuration
  ------------------------------------------------
  By default, Colab buttons open the notebook files from this GitHub repo.
  If you want the buttons to open instructor-controlled Google Drive copies,
  paste the real Google Drive or Colab URLs into CVR_COLAB_DRIVE_LINKS below.

  Accepted formats for each value:
    1. Colab URL:      https://colab.research.google.com/drive/FILE_ID
    2. Drive file URL: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    3. Drive open URL: https://drive.google.com/open?id=FILE_ID

  Leave a value blank ("") to keep using the local GitHub repo notebook fallback.
*/
window.CVR_COLAB_DRIVE_LINKS = window.CVR_COLAB_DRIVE_LINKS || {
  "anns/AlexNet_demo.ipynb": "https://drive.google.com/file/d/1pGhrMRszBNW34BIqI0_YSBTSNXvnPZsl/view?usp=sharing",
  "anns/Facial_emotion.ipynb": "https://drive.google.com/file/d/1cg_aUZ9I1sgl4imIbgDy-3hSStw1MvRa/view?usp=sharing",
  "anns/obj_2afc.ipynb": "https://drive.google.com/file/d/1U-ui9hDuzatQeQuf8hB-ZomqCc0Bvz0D/view?usp=sharing",
  "anns/draw_2afc.ipynb": "https://drive.google.com/file/d/17oQTOm9gJ3DDdR1utxsrn-1RYgvEHHHu/view?usp=sharing",
  "anns/ratings.ipynb": "https://drive.google.com/file/d/1JvDEt_TcaN8RW8X5LUJiscjDmHoXTQCz/view?usp=sharing",
  "anns/n_back.ipynb": "https://drive.google.com/file/d/1r-b1NQ7w7S-oqUl8V0Zmscgu9mBav_PB/view?usp=sharing",

  "psychophysics/extract_2afc_results.ipynb": "https://drive.google.com/file/d/1wetYknkAiT1jlh92UvDdxQrSLl4am2ba/view?usp=sharing",
  "psychophysics/extract_ratings.ipynb": "https://drive.google.com/file/d/1zeyIjglf6AMHv-Qr-dNmgNQjysabscgB/view?usp=sharing",
  "psychophysics/extract_n_back_results.ipynb": "https://drive.google.com/file/d/1M0McgFKeo7D87mYngfRjWh7wR_rYCi5-/view?usp=sharing",
  "psychophysics/make_2afc_html_lines.ipynb": "https://drive.google.com/file/d/1RyN8_8ZQlqmB0QG_UoV6gSO-meq9VUo1/view?usp=sharing",
  "psychophysics/make_ratings_html_lines.ipynb": "https://drive.google.com/file/d/1KDt2_sK0vGo9Hn1o03sNZfmI-I8x3vUz/view?usp=sharing",
  "psychophysics/make_n_back_html_lines.ipynb": "https://drive.google.com/file/d/19DN10ZQJk3fAJT46wNe1nkMkmZePILpH/view?usp=sharing",

  "manipulate_stimuli.ipynb": "https://colab.research.google.com/drive/1ne1pm9dUGDI3A2uxQDes05BnSuj1NbSu?usp=sharing",
  "compare_humans_vs_anns.ipynb": "https://colab.research.google.com/drive/1INIq7Z4s79Gtezc1V4LebitQXl9kXTyT?usp=sharing",
  "projects/Noise_correction_tutorial.ipynb": "https://drive.google.com/file/d/1MychOJfiZAZVQdl6f7BLCAfCNwVCIXq5/view?usp=drive_link",
  "projects/split_half_reliability_colab.ipynb": "https://drive.google.com/file/d/1Ilq0Z91jGIHgn2UZqtcAedVRC9UX19vU/view?usp=drive_link"
};

// Optional: paste your shared Drive folder URL here if you want to show/use it elsewhere.
// Example: "https://drive.google.com/drive/folders/FOLDER_ID?usp=sharing"
window.CVR_SHARED_NOTEBOOK_FOLDER_URL = window.CVR_SHARED_NOTEBOOK_FOLDER_URL || "";

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

  function normalizeNotebookPath(path){
    return (path || '').replace(/^\.\//,'').replace(/^\/+/,'');
  }

  function driveOrColabToColabURL(url){
    if(!url){return '';}
    url = String(url).trim();
    if(!url || url.indexOf('PASTE_') === 0 || url === '#'){return '';}

    // Already a Colab URL.
    if(url.indexOf('https://colab.research.google.com/') === 0){
      return url;
    }

    // Standard Drive file URL: /file/d/FILE_ID/
    var fileMatch = url.match(/drive\.google\.com\/file\/d\/([^\/\?]+)/);
    if(fileMatch && fileMatch[1]){
      return 'https://colab.research.google.com/drive/' + fileMatch[1];
    }

    // Drive open URL: ?id=FILE_ID
    var idMatch = url.match(/[?&]id=([^&]+)/);
    if(idMatch && idMatch[1]){
      return 'https://colab.research.google.com/drive/' + idMatch[1];
    }

    // Fallback: use the URL exactly as provided.
    return url;
  }

  function githubColabURL(path){
    return 'https://colab.research.google.com/github/'+inferRepo()+'/blob/'+currentBranch()+'/'+normalizeNotebookPath(path);
  }

  function colabURL(path){
    var cleanPath = normalizeNotebookPath(path);
    var configured = window.CVR_COLAB_DRIVE_LINKS && window.CVR_COLAB_DRIVE_LINKS[cleanPath];
    return driveOrColabToColabURL(configured) || githubColabURL(cleanPath);
  }

  function githubURL(path){return 'https://github.com/'+inferRepo()+'/blob/'+currentBranch()+'/'+normalizeNotebookPath(path);}
  function rawURL(path){return 'https://raw.githubusercontent.com/'+inferRepo()+'/'+currentBranch()+'/'+normalizeNotebookPath(path);}
  function codespacesURL(){return 'https://codespaces.new/'+inferRepo()+'?quickstart=1';}
  function githubDevURL(path){var suffix=path?('/blob/'+currentBranch()+'/'+normalizeNotebookPath(path)):'';return 'https://github.dev/'+inferRepo()+suffix;}
  function forkURL(){return 'https://github.com/'+inferRepo()+'/fork';}

  window.CVRPages={
    inferRepo:inferRepo,
    colabURL:colabURL,
    githubURL:githubURL,
    rawURL:rawURL,
    codespacesURL:codespacesURL,
    githubDevURL:githubDevURL,
    forkURL:forkURL,
    sharedNotebookFolderURL:function(){return window.CVR_SHARED_NOTEBOOK_FOLDER_URL || '';}
  };

  function applyLinks(){
    document.querySelectorAll('[data-colab-path]').forEach(function(a){
      a.href=colabURL(a.getAttribute('data-colab-path'));
      a.target='_blank';
      a.rel='noopener';
    });
    document.querySelectorAll('[data-github-path]').forEach(function(a){a.href=githubURL(a.getAttribute('data-github-path'));a.target='_blank';a.rel='noopener';});
    document.querySelectorAll('[data-raw-path]').forEach(function(a){a.href=rawURL(a.getAttribute('data-raw-path'));a.target='_blank';a.rel='noopener';});
    document.querySelectorAll('[data-codespaces]').forEach(function(a){a.href=codespacesURL();a.target='_blank';a.rel='noopener';});
    document.querySelectorAll('[data-github-dev]').forEach(function(a){a.href=githubDevURL(a.getAttribute('data-github-dev') || '');a.target='_blank';a.rel='noopener';});
    document.querySelectorAll('[data-fork-repo]').forEach(function(a){a.href=forkURL();a.target='_blank';a.rel='noopener';});
    document.querySelectorAll('[data-shared-notebook-folder]').forEach(function(a){
      var folderURL = window.CVR_SHARED_NOTEBOOK_FOLDER_URL || '';
      if(folderURL){
        a.href=folderURL;
        a.target='_blank';
        a.rel='noopener';
        a.hidden=false;
      } else {
        a.hidden=true;
      }
    });
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
