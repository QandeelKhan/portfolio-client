import React from "react";

const GoogleTag = () => (
    <>
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-590SF1LNWJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-590SF1LNWJ');
</script>
    </>
);

export default GoogleTag;
