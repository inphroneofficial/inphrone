import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Mail } from "lucide-react";

export const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    country: "",
    city: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Inphrone Newsletter Subscription";
    const body = `Hi Inphrone Team,

I would like to subscribe to the Inphrone newsletter and get exclusive updates.

My Details:
Name: ${formData.name}
Email: ${formData.email}
Gender: ${formData.gender}
Age: ${formData.age}
Country: ${formData.country}
City: ${formData.city}

Please add me to your mailing list for early access opportunities and insights into the future of entertainment.

Thank you!`;

    const mailtoLink = `mailto:inphrone@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Card className="w-full max-w-md mx-auto glass-card transform transition-all duration-500 hover:shadow-xl border border-primary/10 shadow-glow rounded-xl">
      <CardHeader className="text-center pb-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-t-xl">
        <CardTitle className="text-xl font-bold animate-slide-in-up">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Stay in the Loop
          </span>
        </CardTitle>
        <CardDescription className="text-sm animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          Get exclusive updates, early access opportunities, and insights into the future of entertainment.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>

          {/* Gender */}
          <div className="space-y-1">
            <Label htmlFor="gender">Gender</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Age */}
          <div className="space-y-1">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              min="13"
              max="100"
              placeholder="Your age"
              value={formData.age}
              onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
              required
            />
          </div>

          {/* Country */}
          <div className="space-y-1">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              type="text"
              placeholder="Your country"
              value={formData.country}
              onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
              required
            />
          </div>

          {/* City */}
          <div className="space-y-1">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              placeholder="Your city"
              value={formData.city}
              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all duration-300 hover:brightness-110 hover:scale-[1.02] shadow-md hover:shadow-lg"
            disabled={!formData.name || !formData.email || !formData.gender || !formData.age || !formData.country || !formData.city}
          >
            <Mail className="w-5 h-5 mr-2" />
            Subscribe
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          No spam. Unsubscribe anytime. Your data stays private.
        </p>
      </CardContent>
    </Card>
  );
};
