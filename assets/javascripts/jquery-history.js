




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>history.js/scripts/bundled/html4+html5/jquery.history.js at master · browserstate/history.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="browserstate/history.js" name="twitter:title" /><meta content="history.js - History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQu" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/3504318?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/3504318?s=400" property="og:image" /><meta content="browserstate/history.js" property="og:title" /><meta content="https://github.com/browserstate/history.js" property="og:url" /><meta content="history.js - History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality." property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="25E6E5FD:2053:18B04B:533DFBA2" name="octolytics-dimension-request_id" /><meta content="4012690" name="octolytics-actor-id" /><meta content="pineapple-thief" name="octolytics-actor-login" /><meta content="af636c767136847b8cd23068da97276db1c96cf21645a397b9a77044e9e9d9fe" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="2pR/VKFG/ILpMchqwkrgUtq9HcYXPEl84tyRnR+X47Y=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-a3b47dba0079fcdc34bf0126746f9827ade6f76f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-1244ff8dce83dcc5eed58fa1a5ce0f2d2083df21.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-dca097f6f454ee06b43ea4817a154392e3caf824.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-5dec30a6a2714763feafa99df1a17dc7610a3c5b.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="b28f18fbbe9b5302287bf7ba1a3b2b87">

        <link data-pjax-transient rel='permalink' href='/browserstate/history.js/blob/cce958939bd6cf3daf0b5cdbddd00f742601e3a8/scripts/bundled/html4%2Bhtml5/jquery.history.js'>

  <meta name="description" content="history.js - History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality." />

  <meta content="3504318" name="octolytics-dimension-user_id" /><meta content="browserstate" name="octolytics-dimension-user_login" /><meta content="1274749" name="octolytics-dimension-repository_id" /><meta content="browserstate/history.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1274749" name="octolytics-dimension-repository_network_root_id" /><meta content="browserstate/history.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/browserstate/history.js/commits/master.atom" rel="alternate" title="Recent Commits to history.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="pineapple-thief"
      data-repo="browserstate/history.js"
      data-branch="master"
      data-sha="3b4667ceac4f0bd73541f38a6bd46e7f1e9c66c4"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="browserstate/history.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/pineapple-thief" class="name">
        <img alt="pineapple-thief" class=" js-avatar" data-user="4012690" height="20" src="https://avatars0.githubusercontent.com/u/4012690?s=140" width="20" /> pineapple-thief
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="browserstate/history.js">This repository</span>
    </li>
      <li>
        <a href="/browserstate/history.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="2pR/VKFG/ILpMchqwkrgUtq9HcYXPEl84tyRnR+X47Y=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1274749" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/browserstate/history.js/watchers">
        283
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/browserstate/history.js/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar browserstate/history.js" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/browserstate/history.js/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star browserstate/history.js" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/browserstate/history.js/stargazers">
        6,242
      </a>
  </div>

  </li>


        <li>
          <a href="/browserstate/history.js/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of browserstate/history.js to your account" aria-label="Fork your own copy of browserstate/history.js to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/browserstate/history.js/network" class="social-count">892</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/browserstate" class="url fn" itemprop="url" rel="author"><span itemprop="title">browserstate</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/browserstate/history.js" class="js-current-repository js-repo-home-link">history.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/browserstate/history.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /browserstate/history.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/browserstate/history.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /browserstate/history.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>159</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/browserstate/history.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /browserstate/history.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>13</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/browserstate/history.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /browserstate/history.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/browserstate/history.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /browserstate/history.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/browserstate/history.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /browserstate/history.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/browserstate/history.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /browserstate/history.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/browserstate/history.js.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/browserstate/history.js.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:browserstate/history.js.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:browserstate/history.js.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/browserstate/history.js" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/browserstate/history.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/browserstate/history.js" class="minibutton sidebar-button" title="Save browserstate/history.js to your computer and use it in GitHub Desktop." aria-label="Save browserstate/history.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/browserstate/history.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download browserstate/history.js as a zip file"
                   title="Download browserstate/history.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ef248f241e04a95e2688c8374f64ab1c -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/browserstate/history.js/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/dev/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="dev"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="dev">dev</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/docpad/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="docpad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="docpad">docpad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/gh-pages/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/master/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/v1.0/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0">v1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/v1.1/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="v1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1">v1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/v1.2/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="v1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2">v1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/v1.3/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="v1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3">v1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/v1.4/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="v1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.4">v1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/v1.5/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="v1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.5">v1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/v1.6/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="v1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.6">v1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/v1.7/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="v1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.7">v1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/blob/v1.8/scripts/bundled/html4+html5/jquery.history.js"
                 data-name="v1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.8">v1.8</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/tree/1.8.0b2/scripts/bundled/html4%2Bhtml5/jquery.history.js"
                 data-name="1.8.0b2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.8.0b2">1.8.0b2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/tree/1.8.0b1/scripts/bundled/html4%2Bhtml5/jquery.history.js"
                 data-name="1.8.0b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.8.0b1">1.8.0b1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/tree/1.8.0/scripts/bundled/html4%2Bhtml5/jquery.history.js"
                 data-name="1.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.8.0">1.8.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/browserstate/history.js/tree/1.8/scripts/bundled/html4%2Bhtml5/jquery.history.js"
                 data-name="1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.8">1.8</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/browserstate/history.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">history.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/browserstate/history.js/tree/master/scripts" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">scripts</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/browserstate/history.js/tree/master/scripts/bundled" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bundled</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/browserstate/history.js/tree/master/scripts/bundled/html4%2Bhtml5" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">html4+html5</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.history.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="scripts/bundled/html4+html5/jquery.history.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Laban Eilers" class="main-avatar js-avatar" data-user="1165221" height="24" src="https://avatars0.githubusercontent.com/u/1165221?s=140" width="24" />
    <span class="author"><a href="/labaneilers" rel="author">labaneilers</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-11-18T11:12:42-05:00" title="2013-11-18 10:12:42">November 18, 2013</time>
    <div class="commit-title">
        <a href="/browserstate/history.js/commit/a6e2554cd5e10bd07f162bb876b0bbf48514b900" class="message" data-pjax="true" title="window.sessionStorage throws an exception with cookies disabled. Includi...

...ng output of buildr">window.sessionStorage throws an exception with cookies disabled. Incl…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="andreasbernhard" href="/browserstate/history.js/commits/master/scripts/bundled/html4%2Bhtml5/jquery.history.js?author=andreasbernhard"><img alt="Andreas Bernhard" class=" js-avatar" data-user="3297171" height="20" src="https://avatars1.githubusercontent.com/u/3297171?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="balupton" href="/browserstate/history.js/commits/master/scripts/bundled/html4%2Bhtml5/jquery.history.js?author=balupton"><img alt="Benjamin Arthur Lupton" class=" js-avatar" data-user="61148" height="20" src="https://avatars2.githubusercontent.com/u/61148?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="sbearcsiro" href="/browserstate/history.js/commits/master/scripts/bundled/html4%2Bhtml5/jquery.history.js?author=sbearcsiro"><img alt="Simon Bear" class=" js-avatar" data-user="1750790" height="20" src="https://avatars0.githubusercontent.com/u/1750790?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="labaneilers" href="/browserstate/history.js/commits/master/scripts/bundled/html4%2Bhtml5/jquery.history.js?author=labaneilers"><img alt="Laban Eilers" class=" js-avatar" data-user="1165221" height="20" src="https://avatars0.githubusercontent.com/u/1165221?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Andreas Bernhard" class=" js-avatar" data-user="3297171" height="24" src="https://avatars1.githubusercontent.com/u/3297171?s=140" width="24" />
            <a href="/andreasbernhard">andreasbernhard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Benjamin Arthur Lupton" class=" js-avatar" data-user="61148" height="24" src="https://avatars2.githubusercontent.com/u/61148?s=140" width="24" />
            <a href="/balupton">balupton</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Simon Bear" class=" js-avatar" data-user="1750790" height="24" src="https://avatars0.githubusercontent.com/u/1750790?s=140" width="24" />
            <a href="/sbearcsiro">sbearcsiro</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Laban Eilers" class=" js-avatar" data-user="1165221" height="24" src="https://avatars0.githubusercontent.com/u/1165221?s=140" width="24" />
            <a href="/labaneilers">labaneilers</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>1 lines (1 sloc)</span>
          <span class="meta-divider"></span>
        <span>22.928 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/browserstate/history.js?branch=master&amp;filepath=scripts%2Fbundled%2Fhtml4%2Bhtml5%2Fjquery.history.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/browserstate/history.js/edit/master/scripts/bundled/html4+html5/jquery.history.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/browserstate/history.js/raw/master/scripts/bundled/html4%2Bhtml5/jquery.history.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/browserstate/history.js/blame/master/scripts/bundled/html4%2Bhtml5/jquery.history.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/browserstate/history.js/commits/master/scripts/bundled/html4%2Bhtml5/jquery.history.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/browserstate/history.js/delete/master/scripts/bundled/html4+html5/jquery.history.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'>typeof JSON!=&quot;object&quot;&amp;&amp;(JSON={}),function(){&quot;use strict&quot;;function f(e){return e&lt;10?&quot;0&quot;+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?&#39;&quot;&#39;+e.replace(escapable,function(e){var t=meta[e];return typeof t==&quot;string&quot;?t:&quot;\\u&quot;+(&quot;0000&quot;+e.charCodeAt(0).toString(16)).slice(-4)})+&#39;&quot;&#39;:&#39;&quot;&#39;+e+&#39;&quot;&#39;}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&amp;&amp;typeof a==&quot;object&quot;&amp;&amp;typeof a.toJSON==&quot;function&quot;&amp;&amp;(a=a.toJSON(e)),typeof rep==&quot;function&quot;&amp;&amp;(a=rep.call(t,e,a));switch(typeof a){case&quot;string&quot;:return quote(a);case&quot;number&quot;:return isFinite(a)?String(a):&quot;null&quot;;case&quot;boolean&quot;:case&quot;null&quot;:return String(a);case&quot;object&quot;:if(!a)return&quot;null&quot;;gap+=indent,u=[];if(Object.prototype.toString.apply(a)===&quot;[object Array]&quot;){s=a.length;for(n=0;n&lt;s;n+=1)u[n]=str(n,a)||&quot;null&quot;;return i=u.length===0?&quot;[]&quot;:gap?&quot;[\n&quot;+gap+u.join(&quot;,\n&quot;+gap)+&quot;\n&quot;+o+&quot;]&quot;:&quot;[&quot;+u.join(&quot;,&quot;)+&quot;]&quot;,gap=o,i}if(rep&amp;&amp;typeof rep==&quot;object&quot;){s=rep.length;for(n=0;n&lt;s;n+=1)typeof rep[n]==&quot;string&quot;&amp;&amp;(r=rep[n],i=str(r,a),i&amp;&amp;u.push(quote(r)+(gap?&quot;: &quot;:&quot;:&quot;)+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&amp;&amp;(i=str(r,a),i&amp;&amp;u.push(quote(r)+(gap?&quot;: &quot;:&quot;:&quot;)+i));return i=u.length===0?&quot;{}&quot;:gap?&quot;{\n&quot;+gap+u.join(&quot;,\n&quot;+gap)+&quot;\n&quot;+o+&quot;}&quot;:&quot;{&quot;+u.join(&quot;,&quot;)+&quot;}&quot;,gap=o,i}}typeof Date.prototype.toJSON!=&quot;function&quot;&amp;&amp;(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+&quot;-&quot;+f(this.getUTCMonth()+1)+&quot;-&quot;+f(this.getUTCDate())+&quot;T&quot;+f(this.getUTCHours())+&quot;:&quot;+f(this.getUTCMinutes())+&quot;:&quot;+f(this.getUTCSeconds())+&quot;Z&quot;:null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\&quot;\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={&quot;\b&quot;:&quot;\\b&quot;,&quot;	&quot;:&quot;\\t&quot;,&quot;\n&quot;:&quot;\\n&quot;,&quot;\f&quot;:&quot;\\f&quot;,&quot;\r&quot;:&quot;\\r&quot;,&#39;&quot;&#39;:&#39;\\&quot;&#39;,&quot;\\&quot;:&quot;\\\\&quot;},rep;typeof JSON.stringify!=&quot;function&quot;&amp;&amp;(JSON.stringify=function(e,t,n){var r;gap=&quot;&quot;,indent=&quot;&quot;;if(typeof n==&quot;number&quot;)for(r=0;r&lt;n;r+=1)indent+=&quot; &quot;;else typeof n==&quot;string&quot;&amp;&amp;(indent=n);rep=t;if(!t||typeof t==&quot;function&quot;||typeof t==&quot;object&quot;&amp;&amp;typeof t.length==&quot;number&quot;)return str(&quot;&quot;,{&quot;&quot;:e});throw new Error(&quot;JSON.stringify&quot;)}),typeof JSON.parse!=&quot;function&quot;&amp;&amp;(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&amp;&amp;typeof i==&quot;object&quot;)for(n in i)Object.prototype.hasOwnProperty.call(i,n)&amp;&amp;(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&amp;&amp;(text=text.replace(cx,function(e){return&quot;\\u&quot;+(&quot;0000&quot;+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,&quot;@&quot;).replace(/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,&quot;]&quot;).replace(/(?:^|:|,)(?:\s*\[)+/g,&quot;&quot;)))return j=eval(&quot;(&quot;+text+&quot;)&quot;),typeof reviver==&quot;function&quot;?walk({&quot;&quot;:j},&quot;&quot;):j;throw new SyntaxError(&quot;JSON.parse&quot;)})}(),function(e,t){&quot;use strict&quot;;var n=e.History=e.History||{},r=e.jQuery;if(typeof n.Adapter!=&quot;undefined&quot;)throw new Error(&quot;History.js Adapter has already been loaded...&quot;);n.Adapter={bind:function(e,t,n){r(e).bind(t,n)},trigger:function(e,t,n){r(e).trigger(t,n)},extractEventData:function(e,n,r){var i=n&amp;&amp;n.originalEvent&amp;&amp;n.originalEvent[e]||r&amp;&amp;r[e]||t;return i},onDomLoad:function(e){r(e)}},typeof n.init!=&quot;undefined&quot;&amp;&amp;n.init()}(window),function(e,t){&quot;use strict&quot;;var n=e.document,r=e.setTimeout||r,i=e.clearTimeout||i,s=e.setInterval||s,o=e.History=e.History||{};if(typeof o.initHtml4!=&quot;undefined&quot;)throw new Error(&quot;History.js HTML4 Support has already been loaded...&quot;);o.initHtml4=function(){if(typeof o.initHtml4.initialized!=&quot;undefined&quot;)return!1;o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t=o.getHashByIndex(),n;return n=e===t,n},o.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,&quot;%&quot;),t=encodeURIComponent(t).replace(/%25/g,&quot;%&quot;),e===t},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return typeof e==&quot;undefined&quot;?t=o.savedHashes[o.savedHashes.length-1]:e&lt;0?t=o.savedHashes[o.savedHashes.length+e]:t=o.savedHashes[e],t},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,n){var r=o.getHashByState(e),i;return i={discardedState:e,backState:n,forwardState:t},o.discardedStates[r]=i,!0},o.discardHash=function(e,t,n){var r={discardedHash:e,backState:n,forwardState:t};return o.discardedHashes[e]=r,!0},o.discardedState=function(e){var t=o.getHashByState(e),n;return n=o.discardedStates[t]||!1,n},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&amp;&amp;delete o.discardedStates[t],!0},o.emulated.hashChange&amp;&amp;(o.hashChangeInit=function(){o.checkerFunction=null;var t=&quot;&quot;,r,i,u,a,f=Boolean(o.getHash());return o.isInternetExplorer()?(r=&quot;historyjs-iframe&quot;,i=n.createElement(&quot;iframe&quot;),i.setAttribute(&quot;id&quot;,r),i.setAttribute(&quot;src&quot;,&quot;#&quot;),i.style.display=&quot;none&quot;,n.body.appendChild(i),i.contentWindow.document.open(),i.contentWindow.document.close(),u=&quot;&quot;,a=!1,o.checkerFunction=function(){if(a)return!1;a=!0;var n=o.getHash(),r=o.getHash(i.contentWindow.document);return n!==t?(t=n,r!==n&amp;&amp;(u=r=n,i.contentWindow.document.open(),i.contentWindow.document.close(),i.contentWindow.document.location.hash=o.escapeHash(n)),o.Adapter.trigger(e,&quot;hashchange&quot;)):r!==u&amp;&amp;(u=r,f&amp;&amp;r===&quot;&quot;?o.back():o.setHash(r,!1)),a=!1,!0}):o.checkerFunction=function(){var n=o.getHash()||&quot;&quot;;return n!==t&amp;&amp;(t=n,o.Adapter.trigger(e,&quot;hashchange&quot;)),!0},o.intervalList.push(s(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&amp;&amp;(o.onHashChange=function(t){var n=t&amp;&amp;t.newURL||o.getLocationHref(),r=o.getHashByUrl(n),i=null,s=null,u=null,a;return o.isLastHash(r)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(r),r&amp;&amp;o.isTraditionalAnchor(r)?(o.Adapter.trigger(e,&quot;anchorchange&quot;),o.busy(!1),!1):(i=o.extractState(o.getFullUrl(r||o.getLocationHref()),!0),o.isLastSavedState(i)?(o.busy(!1),!1):(s=o.getHashByState(i),a=o.discardedState(i),a?(o.getHashByIndex(-2)===o.getHashByState(a.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i.data,i.title,encodeURI(i.url),!1),!0))))},o.Adapter.bind(e,&quot;hashchange&quot;,o.onHashChange),o.pushState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,&quot;%&quot;);if(o.getHashByUrl(r))throw new Error(&quot;History.js does not support states with fragment-identifiers (hashes/anchors).&quot;);if(i!==!1&amp;&amp;o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getHash(),c=o.expectedStateId==s.id;return o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),u===f?(o.busy(!1),!1):(o.saveState(s),c||o.Adapter.trigger(e,&quot;statechange&quot;),!o.isHashEqual(u,l)&amp;&amp;!o.isHashEqual(u,o.getShortUrl(o.getLocationHref()))&amp;&amp;o.setHash(u,!1),o.busy(!1),!0)},o.replaceState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,&quot;%&quot;);if(o.getHashByUrl(r))throw new Error(&quot;History.js does not support states with fragment-identifiers (hashes/anchors).&quot;);if(i!==!1&amp;&amp;o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getStateByIndex(-2);return o.discardState(a,s,l),u===f?(o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),o.saveState(s),o.Adapter.trigger(e,&quot;statechange&quot;),o.busy(!1)):o.pushState(s.data,s.title,s.url,!1),!0}),o.emulated.pushState&amp;&amp;o.getHash()&amp;&amp;!o.emulated.hashChange&amp;&amp;o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,&quot;hashchange&quot;)})},typeof o.init!=&quot;undefined&quot;&amp;&amp;o.init()}(window),function(e,t){&quot;use strict&quot;;var n=e.console||t,r=e.document,i=e.navigator,s=!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s=e.sessionStorage,s.setItem(&quot;TEST&quot;,&quot;1&quot;),s.removeItem(&quot;TEST&quot;)}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!=&quot;undefined&quot;)throw new Error(&quot;History.js Core has already been loaded...&quot;);h.init=function(e){return typeof h.Adapter==&quot;undefined&quot;?!1:(typeof h.initCore!=&quot;undefined&quot;&amp;&amp;h.initCore(),typeof h.initHtml4!=&quot;undefined&quot;&amp;&amp;h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!=&quot;undefined&quot;)return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!=&quot;undefined&quot;&amp;&amp;t!==null){for(e=0;e&lt;t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&amp;&amp;h.log.apply(h,arguments)},h.log=function(){var e=typeof n!=&quot;undefined&quot;&amp;&amp;typeof n.log!=&quot;undefined&quot;&amp;&amp;typeof n.log.apply!=&quot;undefined&quot;,t=r.getElementById(&quot;log&quot;),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!=&quot;undefined&quot;?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i=&quot;\n&quot;+arguments[0]+&quot;\n&quot;;for(s=1,o=arguments.length;s&lt;o;++s){a=arguments[s];if(typeof a==&quot;object&quot;&amp;&amp;typeof l!=&quot;undefined&quot;)try{a=l.stringify(a)}catch(f){}i+=&quot;\n&quot;+a+&quot;\n&quot;}return t?(t.value+=i+&quot;\n-----\n&quot;,t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!=&quot;undefined&quot;?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement(&quot;div&quot;),n=t.getElementsByTagName(&quot;i&quot;);while((t.innerHTML=&quot;&lt;!--[if gt IE &quot;+ ++e+&quot;]&gt;&lt;i&gt;&lt;/i&gt;&lt;![endif]--&gt;&quot;)&amp;&amp;n[0]);return e&gt;4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!=&quot;undefined&quot;?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&amp;&amp;e.history.pushState&amp;&amp;e.history.replaceState&amp;&amp;!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&amp;&amp;!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!(&quot;onhashchange&quot;in e||&quot;onhashchange&quot;in r)||h.isInternetExplorer()&amp;&amp;h.getInternetExplorerMajorVersion()&lt;8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&amp;&amp;i.vendor===&quot;Apple Computer, Inc.&quot;&amp;&amp;/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&amp;&amp;i.vendor===&quot;Apple Computer, Inc.&quot;&amp;&amp;/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&amp;&amp;h.getInternetExplorerMajorVersion()&lt;8),hashEscape:Boolean(h.isInternetExplorer()&amp;&amp;h.getInternetExplorerMajorVersion()&lt;7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+&quot;//&quot;+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=&quot;:&quot;+r.location.port;return e+=&quot;/&quot;,e},h.getBaseHref=function(){var e=r.getElementsByTagName(&quot;base&quot;),t=null,n=&quot;&quot;;return e.length===1&amp;&amp;(t=e[0],n=t.href.replace(/[^\/]+$/,&quot;&quot;)),n=n.replace(/\/+$/,&quot;&quot;),n&amp;&amp;(n+=&quot;/&quot;),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,&quot;&quot;).replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+&quot;/&quot;}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,&quot;&quot;).replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?&quot;&quot;:e}).replace(/\/+$/,&quot;&quot;)+&quot;/&quot;;return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t==&quot;undefined&quot;?!0:t,/[a-z]+\:\/\//.test(e)||(r===&quot;/&quot;?n=h.getRootUrl()+e.replace(/^\/+/,&quot;&quot;):r===&quot;#&quot;?n=h.getPageUrl().replace(/#.*/,&quot;&quot;)+e:r===&quot;?&quot;?n=h.getPageUrl().replace(/[\?#].*/,&quot;&quot;)+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,&quot;&quot;):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,&quot;&quot;)),n.replace(/\#$/,&quot;&quot;)},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&amp;&amp;(t=t.replace(n,&quot;&quot;)),t=t.replace(r,&quot;/&quot;),h.isTraditionalAnchor(t)&amp;&amp;(t=&quot;./&quot;+t),t=t.replace(/^(\.\/)+/g,&quot;./&quot;).replace(/\#$/,&quot;&quot;),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&amp;&amp;decodeURIComponent(e.location.href.replace(/^[^#]+/,&quot;&quot;))===e.location.hash?e.location.href:e.URL.indexOf(&quot;#&quot;)==-1&amp;&amp;e.location.href.indexOf(&quot;#&quot;)!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e==&quot;undefined&quot;&amp;&amp;(e=!0),typeof t==&quot;undefined&quot;&amp;&amp;(t=!0);var n=h.getLastSavedState();return!n&amp;&amp;t&amp;&amp;(n=h.createStateObject()),e&amp;&amp;(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!=&quot;undefined&quot;)t=h.stateToId[n];else if(typeof h.store.stateToId[n]!=&quot;undefined&quot;)t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,&quot;&quot;);if(typeof h.idToState[t]==&quot;undefined&quot;&amp;&amp;typeof h.store.idToState[t]==&quot;undefined&quot;)break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!=&quot;object&quot;)e={};if(typeof e.normalized!=&quot;undefined&quot;)return e;if(!e.data||typeof e.data!=&quot;object&quot;)e.data={};return t={},t.normalized=!0,t.title=e.title||&quot;&quot;,t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&amp;_suid.*/,&quot;&quot;),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&amp;&amp;h.options.disableSuid!==!0&amp;&amp;(t.hash=h.getShortUrl(t.url).replace(/\??\&amp;_suid.*/,&quot;&quot;),/\?/.test(t.hash)||(t.hash+=&quot;?&quot;),t.hash+=&quot;&amp;_suid=&quot;+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&amp;&amp;h.hasUrlDuplicate(t)&amp;&amp;(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf(&quot;#&quot;)!=-1?i=e.split(&quot;#&quot;)[0]:i=e,n=/(.*)\&amp;_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||&quot;&quot;):&quot;&quot;,t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&amp;&amp;(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&amp;&amp;(n=h.getStateById(r)),!n&amp;&amp;t&amp;&amp;!h.isTraditionalAnchor(e)&amp;&amp;(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&amp;&amp;n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&amp;&amp;(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e==&quot;undefined&quot;?t=h.savedStates[h.savedStates.length-1]:e&lt;0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length&lt;1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,&quot;&quot;).replace(/#.*/,&quot;&quot;);return t},h.setHash=function(e,t){var n,i;return t!==!1&amp;&amp;h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&amp;&amp;!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&amp;&amp;(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+&quot;#&quot;+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,&quot;!&quot;).replace(/\%26/g,&quot;&amp;&quot;).replace(/\%3D/g,&quot;=&quot;).replace(/\%3F/g,&quot;?&quot;)),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,&quot;$2&quot;);return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&amp;&amp;n.url===e.url&amp;&amp;(t=n.title||h.options.initialTitle));try{r.getElementsByTagName(&quot;title&quot;)[0].innerHTML=t.replace(&quot;&lt;&quot;,&quot;&amp;lt;&quot;).replace(&quot;&gt;&quot;,&quot;&amp;gt;&quot;).replace(&quot; &amp; &quot;,&quot; &amp;amp; &quot;)}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!=&quot;undefined&quot;?h.busy.flag=e:typeof h.busy.flag==&quot;undefined&quot;&amp;&amp;(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e&gt;=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e==&quot;function&quot;&amp;&amp;(e={callback:e}),typeof t!=&quot;undefined&quot;&amp;&amp;(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&amp;&amp;(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&amp;&amp;(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,&quot;popstate&quot;),h;return},h.back=function(e){return e!==!1&amp;&amp;h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&amp;&amp;h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e&gt;0)for(n=1;n&lt;=e;++n)h.forward(t);else{if(!(e&lt;0))throw new Error(&quot;History.go: History.go requires a positive or negative integer passed.&quot;);for(n=-1;n&gt;=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,&quot;anchorchange&quot;),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData(&quot;state&quot;,t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,&quot;statechange&quot;),h.busy(!1),!0))},h.Adapter.bind(e,&quot;popstate&quot;,h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&amp;&amp;h.emulated.pushState)throw new Error(&quot;History.js does not support states with fragement-identifiers (hashes/anchors).&quot;);if(i!==!1&amp;&amp;h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,&quot;popstate&quot;)),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&amp;&amp;h.emulated.pushState)throw new Error(&quot;History.js does not support states with fragement-identifiers (hashes/anchors).&quot;);if(i!==!1&amp;&amp;h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,&quot;popstate&quot;)),!0};if(s){try{h.store=l.parse(s.getItem(&quot;History.store&quot;))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,&quot;unload&quot;,h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&amp;&amp;(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem(&quot;History.store&quot;))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem(&quot;History.store&quot;,n)}catch(i){if(i.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i;s.length&amp;&amp;(s.removeItem(&quot;History.store&quot;),s.setItem(&quot;History.store&quot;,n))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,&quot;beforeunload&quot;,h.onUnload),h.Adapter.bind(e,&quot;unload&quot;,h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&amp;&amp;h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor===&quot;Apple Computer, Inc.&quot;||(i.appCodeName||&quot;&quot;)===&quot;Mozilla&quot;)h.Adapter.bind(e,&quot;hashchange&quot;,function(){h.Adapter.trigger(e,&quot;popstate&quot;)}),h.getHash()&amp;&amp;h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,&quot;hashchange&quot;)})}},(!h.options||!h.options.delayInit)&amp;&amp;h.init()}(window)</div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05194s from github-fe121-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

