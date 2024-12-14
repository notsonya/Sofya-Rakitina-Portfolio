document.addEventListener('DOMContentLoaded', function() {
    // Sidenote functionality
    var sidenoteElements = document.querySelectorAll('.sidenote');
    sidenoteElements.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling

            // Toggle the active class on the sidenote content
            var sidenoteContent = this.parentElement.querySelector('.sidenote-content');
            if (sidenoteContent) {
                sidenoteContent.classList.toggle('active');
            }

            // Toggle the active class on the sidenote itself
            this.classList.toggle('active');

            // Find the corresponding label and toggle its active class
            var correspondingLabel = this.parentElement.querySelector('label.sidenote-number');
            if (correspondingLabel) {
                correspondingLabel.classList.toggle('active');
            }
        });
    });

    var sidenoteNumberLabels = document.querySelectorAll('label.sidenote-number');
    sidenoteNumberLabels.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling

            // Toggle the active class on the sidenote content
            var sidenoteContent = this.parentElement.querySelector('.sidenote-content');
            if (sidenoteContent) {
                sidenoteContent.classList.toggle('active');
            }

            // Toggle the active class on the sidenote itself
            var sidenoteItself = this.parentElement.querySelector('.sidenote');
            if (sidenoteItself) {
                sidenoteItself.classList.toggle('active');
            }

            // Find the corresponding label and toggle its active class
            var correspondingLabel = this.parentElement.querySelector('label.sidenote-number');
            if (correspondingLabel) {
                correspondingLabel.classList.toggle('active');
            }
        });
    });








    // Figure functionality
    var figureSides = document.querySelectorAll('.figure-side');
    var figureIndications = document.querySelectorAll('.figure-indication');
    var figureLarges = document.querySelectorAll('.figure-large');

    figureSides.forEach(function(figureSide) {
        figureSide.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
            handleToggle(figureSide);
        });
    });

    figureIndications.forEach(function(figureIndication) {
        figureIndication.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling

            var targetValue = this.getAttribute('data-target');
            var figureSide = document.querySelector('.figure-side[data-counter="' + targetValue + '"]');
            if (figureSide) {
                handleToggle(figureSide);
                figureSide.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                var figureLarge = document.querySelector('.figure-large[data-counter="' + targetValue + '"]');
                if (figureLarge) {
                    figureLarge.classList.toggle('active');
                    this.classList.toggle('active');
                    figureLarge.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    console.log('No corresponding .figure-side or .figure-large found');
                }
            }
        });
    });

    figureLarges.forEach(function(figureLarge) {
        figureLarge.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
            figureLarge.classList.toggle('active');

            var targetValue = figureLarge.getAttribute('data-counter');
            var figureIndication = document.querySelector('.figure-indication[data-target="' + targetValue + '"]');
            if (figureIndication) {
                figureIndication.classList.toggle('active');
            } else {
                console.log('No corresponding .figure-indication found');
            }
        });
    });

    function handleToggle(element) {
        var figureContent = element.querySelector('.figure-content');
        if (figureContent) {
            figureContent.classList.toggle('active');
        }

        var figureIndication = document.querySelector('.figure-indication[data-target="' + element.getAttribute('data-counter') + '"]');
        if (figureIndication) {
            figureIndication.classList.toggle('active');
        }
    }


    //TOC

    document.querySelector('.toc').addEventListener('click', function() {
        var tocContent = document.querySelector('.toc-content');
        tocContent.classList.toggle('open');
        this.classList.toggle('open'); // Toggle open class on .toc element as well
    });
    
    // TOC OUTSIDE CLOSE
    document.body.addEventListener('click', function(event) {
        var tocContent = document.querySelector('.toc-content');
        var toc = document.querySelector('.toc');
        if (!event.target.closest('.toc') && tocContent.classList.contains('open')) {
            tocContent.classList.remove('open');
            toc.classList.remove('open'); // Remove open class from .toc element as well
        }
    });




      window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var contentSections = document.querySelectorAll('.middle-column');
        contentSections.forEach(function(section) {
            var sectionId = section.getAttribute('id');
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            var tocLink = document.querySelector('.toc-content a[href="#' + sectionId + '"]');
            if (tocLink) {
                if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                    tocLink.classList.add('active');
                } else {
                    tocLink.classList.remove('active');
                }
            }
        });
    });
});
