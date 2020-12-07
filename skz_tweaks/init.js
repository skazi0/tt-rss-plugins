require(['dojo/_base/kernel', 'dojo/ready'], function  (dojo, ready) {
    ready(function() {
        PluginHost.register(PluginHost.HOOK_FEED_LOADED, function(feed, is_cat) {
            require(["dojo/query", "dojo/NodeList-traverse"],function(q) { 
                // remove publish icons
                q(".pub-pic").forEach(dojo.destroy);
                // remove score icons
                q(".icon-score").forEach(dojo.destroy);
                // move feed icons
                q("#headlines-frame .icon").parent().forEach(function(node, index, array) {
                    var rowNode = node.parentNode.parentNode;
                    var hlLeft = q(".left", rowNode)[0];
                    dojo.place(node, hlLeft);
                });
                // add filter buttons
/*                q(".hl .right").forEach(function(node, index, array) {
                    if (q(".addToFilterLink", node).length > 0)
                        return;
                    var title = q("a.title", node.parentNode)[0].innerText;
                    dojo.place('<a href="rssFilter/submit.php?title=' + title + '" target="_blank" class="addToFilterLink"><img src="rssFilter/filter-add.png" class="addToFilterPic" alt="Add to filter"></a>', node);
                });*/
            });
        });

        PluginHost.register(PluginHost.HOOK_ARTICLE_RENDERED, function(article) {
            require(["dojo/query"],function(q) { 
                // resize allegro images
                q(".post .content img").forEach(function(node, index, array) {
                    if (node.src.includes("allegro")) {
                        node.style.maxHeight = "200px";
                    }
                });
            });
        });

        PluginHost.register(PluginHost.HOOK_INIT_COMPLETE, function() {
            // register custom hotkey actions
/*            App.hotkey_actions["add_to_rssfilter"] = function() {
                if (Article.getActive()) {
                    addToRSSFilter(Article.getActive());
                }
            };*/
        });

    })
});

function addToRSSFilter(article_id) {
    window.open("rssFilter/submit.php?id=" + article_id);
}
