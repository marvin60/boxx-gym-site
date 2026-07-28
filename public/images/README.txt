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


ABOUT PAGE PORTRAIT
-------------------
  coach.jpg     IN USE. 900x1125 (4:5), which is the right shape for the slot.
                Head-and-shoulders shot of the coach holding up the mitts.

                This replaced an earlier candid class photo in which the coach
                was at the right edge and partly cropped, while a client
                photographed from behind occupied the middle of the frame. If
                that older photo ever comes back into use, the client in it
                needs to have agreed to appear on the website.

                To swap in a different portrait: same 4:5 shape, same
                filename, and it goes straight in -- but update `coachPhoto`
                in src/data/site.ts too, because the alt text there describes
                what's actually in the frame.

                To go back to the placeholder box, set coachPhoto.src to ''
                in src/data/site.ts.


NOTES
-----
- Keep video files under about 3 MB. Anything bigger gets slow on phones.
  The two here are 1.4 MB and 2.2 MB, which is fine.
- Anyone recognisable in a photo or video should have agreed to appear on
  the website. The clip currently on the home page features what looks like
  a young teenager -- if he's under 18 you need written permission from a
  parent or guardian before this goes live. Same for hero-video-1.
- The hero video is muted, loops, and does not autoplay for visitors who
  have "reduce motion" turned on in their device settings -- they see the
  still poster frame instead.
