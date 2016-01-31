---
---
(function($) {
    // Stripe
    var handler = StripeCheckout.configure({
        key: '{{ site.stripe_key }}',
        image: '{{ "/images/pizza-not-drugs.gif" | prepend: site.baseurl }}',
        locale: 'auto',
        token: function(token) {
            // Use the token to create the charge with a server-side script.
            // You can access the token ID with `token.id`
            if (typeof ga == 'function') {
                ga('send', 'event', 'checkout', 'completed', 'token-' + token, {{ site.pizza_price_cents }});
            }
        },
        opened: function () {
            if (typeof ga == 'function') {
                ga('send', 'event', 'checkout', 'opened', 'buy-pizza');
            }
        },
        closed: function () {
            if (typeof ga == 'function') {
                ga('send', 'event', 'checkout', 'closed', 'buy-pizza');
            }
        },
    });

    $('[role="purchase"]').on('click', function(e) {
        // Open Checkout with further options
        handler.open({
          name: '{{ site.title }}',
          description: '1 pizza',
          amount: {{ site.pizza_price_cents }}
        });
        e.preventDefault();
    });

    // Close Checkout on page navigation
    $(window).on('popstate', function() {
        handler.close();
    });


    // UI
    skel.breakpoints({
        xlarge:     '(max-width: 1680px)',
        large:      '(max-width: 1280px)',
        medium:     '(max-width: 980px)',
        small:      '(max-width: 736px)',
        xsmall:     '(max-width: 480px)',
        xxsmall:    '(max-width: 360px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
            $body.addClass('is-loading');

            $window.on('load', function() {
                window.setTimeout(function() {
                    $body.removeClass('is-loading');
                }, 100);
            });

        // Mobile?
            if (skel.vars.mobile)
                $body.addClass('is-mobile');
            else
                skel
                    .on('-medium !medium', function() {
                        $body.removeClass('is-mobile');
                    })
                    .on('+medium', function() {
                        $body.addClass('is-mobile');
                    });

        // Fix: Placeholder polyfill.
            $('form').placeholder();

        // Prioritize "important" elements on medium.
            skel.on('+medium -medium', function() {
                $.prioritize(
                    '.important\\28 medium\\29',
                    skel.breakpoint('medium').active
                );
            });

        // Scrolly.
            $('.scrolly')
                .scrolly({
                    speed: 1500
                });

    });

})(jQuery);
