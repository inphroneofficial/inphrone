import React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Twitter,
  Instagram,
} from "lucide-react";

export interface DeveloperModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeveloperModal({ open, onOpenChange }: DeveloperModalProps) {
  const developerLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
      url: "https://github.com",
    },
    {
      icon: <Instagram className="h-4 w-4 text-pink-500" />,
      label: "Instagram",
      url: "https://instagram.com/g_tahngella_k",
    },
    {
      icon: <Linkedin className="h-4 w-4 text-blue-600" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com",
    },
    {
      icon: <Twitter className="h-4 w-4 text-blue-400" />,
      label: "Twitter",
      url: "https://twitter.com/g_thangella",
    },
    {
      icon: <Mail className="h-4 w-4 text-red-500" />,
      label: "Email",
      url: "mailto:imgtk17@gmail.com",
    },
    {
      icon: <Globe className="h-4 w-4 text-green-500" />,
      label: "Portfolio",
      url: "https://thangella-creaftech-solutions.vercel.app/",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[92%] max-w-md h-[85vh] overflow-y-auto rounded-xl border border-primary/20 
        shadow-[0_0_25px_rgba(0,200,255,0.3)] backdrop-blur-lg 
        bg-gradient-to-br from-background/95 via-card/95 to-background/95"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-bold text-primary">
            Meet the Founder
          </DialogTitle>
          <DialogDescription className="text-center text-xs text-muted-foreground">
            Behind <span className="text-primary font-medium">Inphrone</span> 🚀
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex flex-col items-center gap-4 pt-3 px-2">
          {/* Avatar & Info */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-20 w-20 border-2 border-primary shadow-md mb-2">
              <AvatarImage src="/GTK.png" alt="G. Thangella" />
              <AvatarFallback>GT</AvatarFallback>
            </Avatar>
            <h3 className="text-base font-semibold">G. Thangella</h3>
            <p className="text-xs text-primary font-medium">
              Founder of Inphrone
            </p>
            <p className="text-xs text-muted-foreground leading-snug mt-1">
              💼 Entrepreneur • 🧠 Tech Explorer • 🎨 Creative Thinker • 🔭 Visionary
            </p>

            {/* Social Links */}
            <div className="flex gap-2 mt-3 flex-wrap justify-center">
              {developerLinks.map((link, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-8 w-8 rounded-full hover:scale-110 transition-transform duration-200 border-primary/40 hover:bg-primary/20"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          <Separator className="my-2 w-full" />

          {/* About Founder */}
          <div className="space-y-3 text-xs text-center">
            <p>
              I build impactful digital tools to simplify complex systems.{" "}
              <span className="text-primary font-medium">Inphrone</span> reflects my passion for entertainment-tech and audience-powered design.
            </p>

            <div>
              <h4 className="font-medium text-sm mb-1">🌟 My Mission</h4>
              <p className="text-muted-foreground">
                To create meaningful digital products that empower audiences 👥 and creators 🎬, turning opinions 💭 into insights 📊 and transforming entertainment into a people-powered ecosystem 🌍.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-1">🚀 My Vision for Inphrone</h4>
              <p className="text-muted-foreground">
                In a world led by algorithms 🤖, I believe real voices matter more. My vision is to build an ecosystem where **audiences shape creativity**, and creators take bold steps knowing they are backed by real demand.  
                Inphrone = a future where **art meets wisdom** ✨.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-3" />

        {/* Footer Buttons */}
        <DialogFooter className="flex flex-col gap-2">
          <Button
            variant="default"
            size="sm"
            asChild
            className="w-full shadow-md hover:scale-[1.02] transition-all"
          >
            <a
              href="mailto:imgtk17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              📩 Get in Touch
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="w-full"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
