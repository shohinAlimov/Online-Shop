export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  discountPercentage?: number;
  showRating?: boolean;
  rating?: number;
  stock: number;
  thumbnail: string;
  showCartIcon?: boolean;
  showDeleteBtn?: boolean;
  onRemove?: (id: string) => void;
  instantDel?: boolean;
}