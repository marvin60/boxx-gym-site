IMAGES AND VIDEO
================

HERO (home page) -- DONE
------------------------
The top of the home page now plays a looping video, not a still photo.
The files live in  public/videos/ :

  hero-video-2.mp4          IN USE. Pad work in the main gym, bags and ring
  hero-video-2-poster.jpg   behind. Dark, matches the site.

  hero-video-1.mp4          SPARE. Same coach on the mitts, but shot in a
  hero-video-1-poster.jpg   bright white room -- lighter, different feel.

To switch to video 1, change `heroMedia` in src/data/site.ts -- it's two
lines (src and poster). Nothing else needs touching.

To go back to a still photo instead, set heroMedia.src to '' and the hero
shows the poster image on its own.

Both clips are vertical (9:16), so on a wide desktop screen a lot of the top
and bottom gets cropped away. `heroMedia.focalPoint` controls which part
stays visible -- currently "center 42%". Lower the percentage to keep more
of the top of the frame, raise it to keep more of the bottom.


ABOUT PAGE PORTRAIT -- NOW A VIDEO
----------------------------------
The portrait slot on the About page plays a looping clip, not a still photo.
Both files are 720x1280 (9:16), which is the shape of the slot:

  coach-video.mp4          IN USE. Pad work on the canvas -- the coach holding
  coach-video-poster.jpg   a mitt for a young boxer mid-punch, ropes behind.

The poster is on screen from the first paint, so the slot is never blank while
the clip loads.

PHONES DON'T DOWNLOAD THE CLIP. Under 768px the browser is never offered the
mp4 and shows the poster image on its own -- the file is 3.3 MB and that is a
lot to spend on a phone for a decorative loop. Visitors with "reduce motion"
turned on also get the still poster, at any screen size.

  coach.jpg     NO LONGER USED. The still portrait this replaced -- a
                head-and-shoulders shot of the coach on the mitts. Nothing
                links to it any more. Safe to delete; kept for now in case you
                want the photo back.

To swap in a different clip: keep the 9:16 shape, keep both filenames, and it
goes straight in -- but update `coachMedia` in src/data/site.ts too, because
the alt text there describes what's actually in the frame.

To go back to a still image, set coachMedia.src to '' and the slot shows the
poster on its own everywhere. Set coachMedia.poster to '' as well for the
lettered placeholder box.


NOTES
-----
- Keep video files under about 3 MB. Anything bigger gets slow on phones.
  The hero clips are 1.4 MB and 2.2 MB, which is fine. coach-video.mp4 is
  3.3 MB, over the guide -- it is held back from phones for that reason, so
  it only costs desktop visitors. Re-exporting it smaller would be better
  than leaving that as the fix.
- Anyone recognisable in a photo or video should have agreed to appear on
  the website. The clip currently on the home page features what looks like
  a young teenager -- if he's under 18 you need written permission from a
  parent or guardian before this goes live. Same for hero-video-1, and same
  for coach-video.mp4, which also has a young boxer in it.
- Both videos are muted, loop, and do not autoplay for visitors who have
  "reduce motion" turned on in their device settings -- they see the still
  poster frame instead.
