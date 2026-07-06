import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import sunflowerTrack from "../../assets/music/sunflower.mp3";
import cincinTrack from "../../assets/music/cincin.mp3";
import styleTrack from "../../assets/music/style.mp3";
import {
  Music2, Play, Pause, SkipBack, SkipForward,
  Volume2, VolumeX, ChevronUp, ChevronDown,
} from "lucide-react";

interface Track {
  title: string;
  artist: string;
  src: string;
  cover?: string;
}

const tracks: Track[] = [
  {
    title: "Sunflower",
    artist: "Post Malone, Swae Lee",
    src: sunflowerTrack,
    cover: "https://i.scdn.co/image/ab67616d00001e02ea0eb66d4b8fef4a84c599fe",
  },
  {
    title: "Cincin",
    artist: "Hindia",
    src: cincinTrack,
    cover: "https://images.genius.com/b10d0fba57f1047e7e20abdae2b5e0c3.1000x1000x1.png",
  },
  {
    title: "Style",
    artist: "Taylor Swift",
    src: styleTrack,
    cover: "https://i.scdn.co/image/ab67616d00001e0252b2a3824413eefe9e33817a",
  },
];

const formatTime = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [seek, setSeek] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const [isDragging, setIsDragging] = useState(false);

  const howlRef = useRef<Howl | null>(null);
  const rafRef = useRef<number | null>(null);

  const track = tracks[currentIdx];

  useEffect(() => {
    if (howlRef.current) {
      howlRef.current.stop();
      howlRef.current.unload();
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    howlRef.current = new Howl({
      src: [track.src],
      html5: true,
      volume,
      onload: () => {
        setDuration(howlRef.current?.duration() ?? 0);
        setSeek(0);
      },
      onend: () => handleNext(),
    });

    if (isPlaying) {
      howlRef.current.play();
      startRAF();
    }

    return () => {
      howlRef.current?.stop();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [currentIdx]);

  const startRAF = () => {
    const loop = () => {
      if (!isDragging && howlRef.current?.playing()) {
        setSeek(howlRef.current.seek() as number);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  };

  const handlePlay = () => {
    if (!howlRef.current) return;
    if (isPlaying) {
      howlRef.current.pause();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    } else {
      howlRef.current.play();
      startRAF();
    }
    setIsPlaying((v) => !v);
  };

  const handleNext = () => {
    setCurrentIdx((v) => (v + 1) % tracks.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentIdx((v) => (v - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setSeek(val);
    howlRef.current?.seek(val);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    howlRef.current?.volume(val);
    setIsMuted(val === 0);
  };

  const handleMute = () => {
    if (isMuted) {
      howlRef.current?.volume(volume || 0.6);
      setIsMuted(false);
    } else {
      howlRef.current?.volume(0);
      setIsMuted(true);
    }
  };

  const progress = duration > 0 ? (seek / duration) * 100 : 0;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-72 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "0 16px 48px var(--shadow)",
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-4 flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, var(--accent), #818cf8)",
              }}
            >
              <div className="relative">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-12 h-12 rounded-xl object-cover shadow-md"
                />
                {isPlaying && (
                  <div className="absolute inset-0 rounded-xl flex items-end justify-center pb-1 gap-0.5">
                    {[1, 2, 3].map((b) => (
                      <motion.span
                        key={b}
                        className="w-0.5 rounded-full bg-white/80"
                        animate={{ height: ["3px", "10px", "3px"] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: b * 0.15 }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">{track.title}</p>
                <p className="text-white/60 text-xs truncate">{track.artist}</p>
              </div>
            </div>

            <div className="px-4 py-4 flex flex-col gap-3">
              {/* Playlist */}
              <div className="flex flex-col gap-1">
                {tracks.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentIdx(i);
                      setIsPlaying(true);
                    }}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all duration-200"
                    style={{
                      background: i === currentIdx ? "var(--accent-soft)" : "transparent",
                      border: `1px solid ${i === currentIdx ? "color-mix(in srgb, var(--accent) 25%, transparent)" : "transparent"}`,
                    }}
                    onMouseEnter={(e) => {
                      if (i !== currentIdx)
                        (e.currentTarget as HTMLElement).style.background = "var(--surface-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      if (i !== currentIdx)
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <img
                      src={t.cover}
                      alt={t.title}
                      className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-semibold truncate"
                        style={{ color: i === currentIdx ? "var(--accent)" : "var(--text)" }}
                      >
                        {t.title}
                      </p>
                      <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
                        {t.artist}
                      </p>
                    </div>
                    {i === currentIdx && isPlaying && (
                      <span className="flex gap-0.5 items-end h-4 flex-shrink-0">
                        {[1, 2, 3].map((b) => (
                          <motion.span
                            key={b}
                            className="w-0.5 rounded-full"
                            style={{ background: "var(--accent)" }}
                            animate={{ height: ["4px", "14px", "4px"] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: b * 0.15 }}
                          />
                        ))}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Seek bar */}
              <div>
                <input
                  type="range"
                  min={0}
                  max={duration || 1}
                  step={0.1}
                  value={seek}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onChange={handleSeek}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, var(--accent) ${progress}%, var(--border) ${progress}%)`,
                  }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  <span>{formatTime(seek)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                {/* Volume */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleMute}
                    className="transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolume}
                    className="w-16 h-1 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, var(--accent) ${(isMuted ? 0 : volume) * 100}%, var(--border) ${(isMuted ? 0 : volume) * 100}%)`,
                    }}
                  />
                </div>

                {/* Play controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full transition-all"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background = "var(--accent-soft)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <SkipBack size={16} />
                  </button>

                  <button
                    onClick={handlePlay}
                    className="p-3 text-white rounded-full transition-all"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 4px 12px var(--shadow)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--accent)"}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full transition-all"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background = "var(--accent-soft)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <SkipForward size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-3 text-white rounded-2xl transition-colors"
        style={{
          background: "var(--accent)",
          boxShadow: "0 8px 24px var(--shadow)",
        }}
        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"}
        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--accent)"}
      >
        <Music2 size={18} />
        <span className="text-sm font-medium">
          {isOpen ? "Tutup" : "Music"}
        </span>
        {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        {isPlaying && (
          <span className="flex gap-0.5 items-end h-4 ml-1">
            {[1, 2, 3].map((b) => (
              <motion.span
                key={b}
                className="w-0.5 bg-white rounded-full"
                animate={{ height: ["3px", "12px", "3px"] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: b * 0.15 }}
              />
            ))}
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;